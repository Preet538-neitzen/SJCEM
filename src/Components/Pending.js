import React, { Component } from 'react'
import fire from  '../Config/Config'
import { Link } from 'react-router-dom';

export class Pending extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount() {
        var db=fire.firestore();
        let myApp=this;
        fire.auth().onAuthStateChanged(function(user){
            if(user)
            {
                myApp.setState({username:user.email});
                db.collection('posts').get().then(temp => {
                    // console.log(temp.docs);
                    temp.docs.map(val => {
                        if(val.data().author==user.uid)
                        {
                            let arr=myApp.state.posts;
                            arr.push(val.data());
                            myApp.setState({posts:[...arr]});
                            

                        }
                        // console.log(val.data());

                    })
                })
            }
            else
            {
                console.log('please log in')
            }
        })
    }
    render() {
     
        return (
            <div>
                
        <header id="topnav" class="defaultscroll sticky bg-white">
            <div class="container">
                
                <div>
                    <a class="logo" href="index.html">Posts</a>
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
                        <li><Link to="/SignIn">Home</Link></li>
                       
                    </ul>
                   
                </div>
            </div>
        </header>
        
        
        
        <section class="bg-half-260 bg-light" style={{background: "url('images/crypto/bg.png') center center"}}>
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row mt-5 justify-content-center">
                            <div class="col-lg-10">
                                <div class="title-heading text-center">
                                    <img src="images\crypto\test.png" height="136" class="mover" alt=""/>
                                    <h1 class="heading text-primary text-shadow-title mt-4 mb-3">Please have patience!</h1>
                                    
                                </div>                                
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        

        
        <section class="section border-top">
            
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <div class="table-responsive crypto-table bg-white shadow rounded">
                            <table class="table mb-0 table-center">
                                <thead>
                                    <tr>
                                       
                                        <th scope="col">Name</th>
                                      
                                        <th scope="col" style={{maxWidth: 150}}>Status</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.posts.length!=0 ? 
                                        this.state.posts.map(item => {
                                            return(
                                                <tr>
                                                    <th>
                                                        <p class="mt-2 mb-0 font-weight-normal h5">{item.name}  </p>
                                                    </th>
                                                    
                                                    <th >{item.published_status?<span class="text-success">Approved</span>:<span class="text-danger">Pending</span>}</th>
                                                    
                                                </tr>
                                            )
                                        })
                                        :<>
                                        <h2>All posts are cleared!</h2>
                                        </>
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
           
            </section>
            </div>
        )
    }
}

export default Pending
