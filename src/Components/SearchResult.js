import React, { Component } from 'react'
import fire from '../Config/Config'
import { Link } from 'react-router-dom';

export class SearchResult extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            posts:[],
            searchTerm:''
        }
    }
    showResult=()=>{
        
        this.props.history.push("/result/"+this.state.searchTerm);
        window.location.reload();
   }
    componentDidMount() {
        let myApp = this;
        const searchTerm=this.props.match.params.search_term;
        var db=fire.firestore();
        var storage=fire.storage();
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
               
                db.collection('posts').get().then(temp => {
                //    var searchResult=[];
                    temp.docs.map(val => {
                         
                        if(val.data().category==searchTerm)
                        {
                            storage.ref('images').child(val.data().image).getDownloadURL().then(url => {
                            let value={...val.data(),url:url,id:val.id};
                            console.log(value);
                            myApp.setState({posts:[...myApp.state.posts,value]})
                            //  myApp.state.posts.push(val.data());
                        })

                           
                        }
                    })
            //   myApp.setState({posts:[...searchResult]});
                   console.log(myApp.state.posts);     
                })
            } else {
               console.log('please log in');
            }
        });
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
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
                
        <section class="section">
            <div class="container">
                <div class="row">
                   
                    <div class="col-lg-8 col-md-6">
                        <div class="mr-lg-2">
                            <div class="row">
                                {
                                    this.state.posts.length!=0?<>
                                        {
                                            this.state.posts.map(item => {
                                                return (
                                                    <div class="col-lg-6 mb-4 pb-2">
                                                        <Link to={'/' + item.id}>
                                                            <div class="blog position-relative overflow-hidden shadow rounded">
                                                            <div class="position-relative">
                                                                <img src={item.url} class="img-fluid rounded-top" alt=""/>
                                                                <div class="overlay rounded-top bg-dark"></div>
                                                            </div>
                                                            <div class="content p-4">
                                                                <h4><a href="javascript:void(0)" class="title text-dark">{item.title}</a></h4>
                                                                <div class="post-meta mt-3">
                                                                    {/* <a href="javascript:void(0)" class="text-muted float-right readmore">Read More <i class="mdi mdi-chevron-right"></i></a> */}
                                                                    <ul class="list-unstyled mb-0">
                                                                        <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>{item.likes}</a></li>
                                                                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>{item.no_comments}</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="author">
                                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> {item.name}</small>
                                                              
                                                            </div>
                                                        </div>
                                                        </Link>
                                                        
                                                    </div>
                                                )
                                                
                                            })
                                        }
                                    </>:<>
                                    <h2>No results found</h2>
                                    </>
                                }
                                
                                
                                
            
                               
                                <div class="col-12">                                
                                    <ul class="pagination justify-content-center mb-0 list-unstyled">
                                        <li><a href="#" class="pr-3 pl-3 pt-2 pb-2">Prev</a></li>
                                        <li class="active"><a href="#" class="pr-3 pl-3 pt-2 pb-2">1</a></li>
                                        <li><a href="#" class="pr-3 pl-3 pt-2 pb-2">2</a></li>
                                        <li><a href="#" class="pr-3 pl-3 pt-2 pb-2">3</a></li>
                                        <li><a href="#" class="pr-3 pl-3 pt-2 pb-2">Next</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    

                    
                    <div class="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="sidebar mt-sm-30 p-4 rounded shadow">
                            
                            <div class="widget mb-4 pb-2">
                                <h4 class="widget-title">Search</h4>
                                <div id="search2" class="widget-search mt-4 mb-0">
                                   
                                        <div>
                                            <input onChange={this.handleChange} type="text" class="border rounded" name="searchTerm" id="searchTerm" placeholder="Search Keywords..."/>
                                            <button type="submit" onClick={this.showResult} class="btn btn-primary">Search</button>
                                            
                                        </div>
                                    
                                </div>
                            </div>
                            

                           

                            
                            
                          

                            
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
            </div>
        )
    }
}

export default SearchResult
