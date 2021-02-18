import React, { Component } from 'react'
import fire from  '../Config/Config'

import { Link } from 'react-router-dom';


export class BlogPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            posts:[],
            currPosts:[],
            username:'username',
            searchTerm:''
            
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
   componentDidMount() {
        let myApp = this;
        console.log('indie cdm');
        var db=fire.firestore();
        var storage=fire.storage();
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                myApp.setState({username:user.email});
                db.collection('posts').get().then(val => {
                    val.docs.map(val => {
                        storage.ref('images').child(val.data().image).getDownloadURL().then(url => {
                            let value={...val.data(),url:url,id:val.id};
                            console.log(value);
                            myApp.setState({posts:[...myApp.state.posts,value]});
                           
                        })
                    })
                  
                })
            } else {
               console.log('pleaae log in');
            }
        });
   }
   showResult=()=>{
        
        this.props.history.push("/result/"+this.state.searchTerm);
   }
    render() {
       
        return (
           <div>
               <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                   <div>
                    <a class="logo" href="/BlogPage">Blogs</a>
                </div>                 
                <div class="buy-button">
                    <a  class="btn btn-primary">{this.state.username}</a>
                </div>
           
                <div class="menu-extras">
                    <div class="menu-item">
                      
                        <a class="navbar-toggle">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                      
                    </div>
                </div>
        
                <div id="navigation">
                 
                    <ul class="navigation-menu">
                        <li><a href="/BlogPage">Posts</a></li>
                        <li class="has-submenu">
                            <a href="/createPost">Create Post</a>
                            
                        </li>
        
                        
                    </ul>
                    <div class="buy-menu-btn d-none">
                        <a  class="btn btn-primary">Username</a>
                    </div>
                </div>
            </div>
        </header>
        <div class="container " style={{paddingTop:100}}>
                                <div class="component-wrapper rounded shadow">
                                    
        
                                    <div class="p-4">
                                       
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <input name="searchTerm" onChange={this.handleChange} id="searchTerm" type="text" class="form-control" placeholder="Enter Detail " required="" aria-describedby="newssubscribebtn"/>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary submitBnt" onClick={this.showResult}  id="newssubscribebtn">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
        <section class="section">
        
            <div class="container">
                <div class="row">
                {
            this.state.posts.map(temp => {
                if(temp.published_status)
                {

                    return (
                    
                       
                            <div class="col-lg-4 col-md-6 mb-4 pb-2">
                                <Link to={'/' + temp.id}>
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src={temp.url} class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                                <h4><a href="javascript:void(0)" class="title text-dark">{temp.title }</a></h4>
                                <div class="post-meta mt-3">
                                    {
                                        temp.doctorid.length==10?<>
                                            <a href="javascript:void(0)" class="btn btn-outline-success rounded-pill mb-3 mr-2">Verified <span class="fa fa-check"></span> </a>
                                        </>:<>
                                        
                                        <a href="javascript:void(0)" class="btn btn-outline-danger rounded-pill mb-3 mr-2">Unverified <span class="fa fa-close"></span></a>
                                        </>
                                    }
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>{temp.likes}</a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>{temp.no_comments}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="author">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i>{temp.name}</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                            </div>
                        </div>
                        </Link>
                    </div>
                       
                    
                    
                    
                    
                )
                }
                
            })
        }
                    
                    
                    
                    
                    

                   
                </div>
            </div>
        </section>
        
        
                            
                           
        
        
        
        </div>
        )
    }
}

export default BlogPage
