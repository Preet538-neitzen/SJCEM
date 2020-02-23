
import React, { Component } from 'react'
import fire from '../Config/Config'
import firebase from 'firebase/app'
import {Link} from 'react-router-dom'
// import SimpleReactFileUpload from '../Components/Upload'


export class Info extends Component {
    constructor(props){
        super(props);
        this.state={
         email:'',
         name:'',
         subject:'',
         distress:'',
         phone:'',
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.submit = this.submit.bind(this)
        this.handleChangeDistress = this.handleChangeDistress.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeSubject = this.handleChangeSubject.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        // this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.newFun = this.newFun.bind(this);
        // this.login = this.login.bind(this);
        // this.signup = this.signup.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this)
        //  this.readFullStory = this.readFullStory.bind(this);
        // this.toggleFullStory = this.toggleFullStory.bind(this);
        // this.handleChangeUserLogin = this.handleChangeUserLogin.bind(this);
        //  this.onSignInSubmit = this.onSignInSubmit.bind(this);
      }
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
        handleChangeEmail(e){
          this.setState({email:e.target.value})
        }
    
        handleChangePhone(e){
            this.setState({phone:e.target.value})
        }
      
      
        submit=(e)=>{
          let self = this
          e.preventDefault();
         console.log('hi')
         this.setState({text:""})
         fire.auth().onAuthStateChanged((user) => {
                var db = firebase.firestore()
                db.collection("distress").doc(this.state.name).set({
                    Name:this.state.name,
                    Subject:this.state.subject,
                    Distress:this.state.distress,
                    phone:this.state.phone,
                    }).then(function() {
                    alert("We have received your response,kindly check your phone,kindly check your whatsapp... ")
                    console.log("Data Ojbect for new Distress Created");
                    });    
            })

            

         e.preventDefault()   
        }
     logout(){
          firebase.auth().signOut();
        }

        handleChangeSubject(e){
            this.setState({subject:e.target.value})
        }
        handleChangeName(e){
            console.log(e.target.value)
            this.setState({name:e.target.value})
        }
        handleChangeDistress(e){
            this.setState({distress:e.target.value})
        }
        
        handleChange(e){
          this.setState({[e.target.name]: e.target.value});
      }
      handleChangeUserLogin(e){
          this.setState({UserLogin:e.target.value})
      }

       
    //   componentDidMount() {
    //     var presenceRef = firebase.database().ref("disconnectmessage");
    //     // Write a string when this client loses connection
    //     presenceRef.onDisconnect().set("I disconnected!");
    //   }

        
    render() {
        return (
<>


 <div>
 <header id="topnav" class="defaultscroll sticky bg-white">
            <div class="container">
                
                <div>
                    <a class="logo" href="index.html">Distress</a>
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
                        <li><Link to="/student">Home</Link></li>
                        
                       
                    </ul>
                    
                </div>
            </div>
        </header>

<div>
             <section class="section">
             <div class="container">
                 <div class="row justify-content-center">
                 <div class="col-md-6">
                                         <div class="form-group position-relative">
                                             <label>Problem Subject: <span class="text-danger">*</span></label>
                                             <i class="mdi mdi-email ml-3 icons"></i>
                                             <input id="subject" type="Subject" onChange={this.handleChangeSubject} placeholder="Problem" name="subject" value={this.state.subject} class="form-control pl-5" required=""/>
                                         </div>
                                     </div>

                     <div class="col-md-10 mt-4 pt-2">
                         <div class="mt-4 pt-2 p-4 shadow rounded">
                             <h4 class="page-title pb-3">Leave Your Distress In Detail :</h4>
                             <form>
                                 <div class="row">
                                     <div class="col-md-12">
                                         <div class="form-group position-relative">
                                             <label>Enter below</label>
                                             <i class="mdi mdi-comment-outline ml-3 icons"></i>
                                             <textarea id="distress" name='distress' onChange={this.handleChangeDistress}  placeholder="Your Comment" rows="5" value={this.state.distress} name="distress" class="form-control pl-5" required=""></textarea>
                                         </div>
                                     </div>

                                     <div class="col-md-6">
                                         <div class="form-group position-relative">
                                             <label>Name <span class="text-danger">*</span></label>
                                             <i class="mdi mdi-account ml-3 icons"></i>
                                             <input id="name" name="name" value={this.state.name} onChange={this.handleChangeName}  type="text" placeholder="Name" class="form-control pl-5" required=""/>
                                         </div>
                                     </div>

                                     <div class="col-md-6">
                                         <div class="form-group position-relative">
                                             <label>Your Phone <span class="text-danger">*</span></label>
                                             <i class="mdi mdi-email ml-3 icons"></i>
                                             <input id="email" type="email" value={this.state.phone} onChange={this.handleChangePhone}  placeholder="Phone" name="phone" class="form-control pl-5" required=""/>
                                         </div>
                                     </div>
                                     

                                     <div class="col-md-12">
                                         <div class="send">
                                         <button type="submit" onClick={this.submit} class="btn btn-primary w-100">Send Message</button>
                                         </div>
                                         <div class="col-md-4">Kindly add some proof to support your case...</div>
                                         
                                     </div>
                                 </div>
                             </form>
                         </div>
                        
                     </div>
                 </div>
             </div>
         </section>
             </div>
         
            </div>
    
           </>
        )
    }
}

export default Info