import React, { Component } from 'react'
import fire from  '../Config/Config'

export class Undiagnosed extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            username:'username',
            name:'',
            doctorid:'',
            title:'',
            category:'',
            content:'',
            image:null,
            url:'',
            quote:''
            
        }
    }
    handleSubmit=()=>{
        let myApp = this;
        console.log('submit data');
        var db = fire.firestore();
        var storage = fire.storage();
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                
                const {image} = myApp.state;
                const uploadTask = storage.ref(`undiagnosed/${image.name}`).put(image);
                uploadTask.on('state_changed', 
                (snapshot) => {
                    // progrss function ....
                    // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    // this.setState({progress});
                }, 
                (error) => {
                    // error function ....
                    console.log(error);
                }, 
                () => {
                    // complete function ....
                    storage.ref('undiagnosed').child(image.name).getDownloadURL().then(url => {
                        console.log(url);
                        myApp.setState({url});
                    })
                });

                db.collection('undiagnosed').add({
                    name:myApp.state.name,
                    category:myApp.state.category,
                    content:myApp.state.content,
                    author:user.uid,
                    image:myApp.state.image.name,
                  
                   
                    
                })
                console.log('post created');
                // myApp.props.history.push("/BlogPage");
            } else {
              console.log('post was not created');
            }
          });
    }
    componentDidMount() {
        let myApp = this;
        var db = fire.firestore();
        fire.auth().onAuthStateChanged(user => {
            if(user)
            {
                myApp.setState({username:user.email});
            }
            else{
                console.log('please log in')
            }
        })
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
       
        this.setState({[name]:value});
        console.log(this.state);
     }
     imgUpload=(e)=>{
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
          }
          console.log(this.state.image);
     }
    render() {
        return (
            <div>
                <header id="topnav" class="defaultscroll sticky">
                    <div class="container">
                        <div>
                            <a class="logo" href="/BlogPage">We are happy to help you!</a>
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
                            
                        </div>
                    </div>
                </header>
                <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="p-4 rounded shadow" style={{overflow:'hidden'}}>
                            <h5 class="text-md-left text-center">Problem  :</h5>

                            <div class="mt-3 text-md-left text-center d-sm-flex">
                                <img src={this.state.url || " https://via.placeholder.com/110*110"} class="avatar float-md-left avatar-medium rounded-pill shadow mr-md-4" alt=""/>
                                
                                <div class="mt-md-4 mt-3 mt-sm-0">
                                   <input type="file" onChange={this.imgUpload} class="btn btn-primary mt-2"  />
                                    {/* <a href="javascript:void(0)" class="btn btn-primary mt-2">Upload</a> */}
                                    <a href="javascript:void(0)" class="btn btn-outline-primary mt-2 ml-2">Delete</a>
                                </div>
                            </div>

                            <form>
                                <div class="row mt-4">
                                    <div class="col-md-12">
                                        <div class="form-group position-relative">
                                            <label> Name </label>
                                          
                                            <input onChange={this.handleChange} name="name" id="name" type="text" class="form-control pl-5" />
                                        </div>
                                    </div>
                                   
                                   
                                   
                                    <div class="col-md-12">
                                        <div class="form-group position-relative">
                                            <label>Enter type of disease </label>
                                           
                                            <input onChange={this.handleChange} name="category" id="category" type="text" class="form-control pl-5" />
                                        </div>
                                    </div>
                                   
                                   
                                    <div class="col-md-12">
                                        <div class="form-group position-relative">
                                            <label>Enter Description:</label>
                                            <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                                            <textarea onChange={this.handleChange} name="content" id="content" rows="4" class="form-control pl-5" placeholder="Description :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <input id="submit" onClick={this.handleSubmit} name="send" class="btn btn-primary" value="Save Changes"/>
                                    </div>
                                </div>
                            </form>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
            </div>
        )
    }
}

export default Undiagnosed
