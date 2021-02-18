
import React, { Component } from 'react'
import fire from '../Config/Config'
import {Link} from 'react-router-dom'
export class ViewProb extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount() {
        let myApp = this;
        console.log('indie cdm');
        var db=fire.firestore();
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                myApp.setState({username:user.email});
                db.collection('undiagnosed').get().then(temp => {
                   myApp.setState({posts:[...temp.docs]});
                   console.log(myApp.state.posts);
                })
            } else {
               console.log('pleaae log in');
            }
        });
   }
    render() {
        return (
            <div><div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
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
                        {/* <li><a href="/BlogPage">Posts</a></li>
                        <li class="has-submenu">
                            <a href="/createPost">Create Post</a>
                            
                        </li> */}
        
                        
                    </ul>
                    <div class="buy-menu-btn d-none">
                        <a  class="btn btn-primary">Username</a>
                    </div>
                </div>
            </div>
        </header>
        <div style={{paddingTop:100}}>
{
            this.state.posts.map(temp => {
                
                return (
                  
                       
                            <section class="section" style={{padding:20,width:500}}>
                                
                                    <div class="row">
                                    
                                        <div class="col-lg-12 col-md-12">
                                              <Link to={'/solution/' + temp.id}>    
                                            <div class="">
                                                <div class="blog position-relative overflow-hidden shadow rounded">
                                                    {/* <div class="position-relative">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZubQsSa-lTWo_H8wLC1pjEIBuE8xMLS28b9A6aqn6HqLmsLvG" class="img-fluid rounded-top" alt=""/>
                                                    </div> */}
                                                    <div class="content p-4">
                                                <h6><i class="mdi mdi-tag text-primary mr-1"></i><a href="javscript:void(0)" class="text-primary">{temp.data().category}</a></h6>
                                                    
                                                <p class="text-muted">{temp.data().name}</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>


</Link>
                                        </div>
                                    </div>
                                
                            </section>
                       
                    
                    
                    
                )
            })
        }
        
        </div>
            </div>
        )
    }
}

export default ViewProb