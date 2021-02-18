import React, { Component } from 'react'
import fire from '../Config/Config'
import firebase from 'firebase/app'


export class DoctorDash extends Component {
    constructor(props){
        super(props);
        this.state={
          user: null,
          email: '',
          password: '',
          username:'',
          LastName:'',
          PhoneNumber:'',
          valueToBePassed:'',
          text:'',
          newVT:'',
          myStory:'',
          allStories:[],
          people:[],
          peopleId:[],
          items:[],
          errorMessage:'',
          VerificationCode:'',
          UserLogin:'',
          uid:'',
          solution:'',
          name:'',
          subject:'',

        }
        // this.handleChangeEmail = this.handleChangeEmail.bind(this)
        // this.handleChangePass = this.handleChangePass.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.newFun = this.newFun.bind(this);
        // this.login = this.login.bind(this);
        // this.signup = this.signup.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleChangeSolution = this.handleChangeSolution.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeSubject = this.handleChangeSubject.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.submit = this.submit.bind(this)
        // // this.readFullStory = this.readFullStory.bind(this);
        // this.toggleFullStory = this.toggleFullStory.bind(this);
        // this.handleChangeUserLogin = this.handleChangeUserLogin.bind(this);
        // this.onSignInSubmit = this.onSignInSubmit.bind(this);
      }
      handleChangeName(e){
        this.setState({name: e.target.value});
    }
    handleChangePhone(e){
        this.setState({PhoneNumber: e.target.value});
    }
    handleChangeSolution(e){
        this.setState({solution: e.target.value});
    }
    handleChangeSubject(e){
        this.setState({subject: e.target.value});
    }
    
    
        handleChangeEmail(e){
          this.setState({email:e.target.value})
        }
    
        handleChangePass(e){
          this.setState({password:e.target.value})
        }
    
  
    
 
        componentDidMount(){
    
        
          let self = this
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        return firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      }); 
          fire.auth().onAuthStateChanged((user) => {
         
            if (user) {
              if(user.emailVerified){
                console.log("Verified User !!")
              }
              else{
                console.log("Not Verified Yet")
              }
              this.setState({ user });
              var user = firebase.auth().currentUser;
              var name, email, photoUrl, uid, emailVerified,data;
              
              data = this.state.displayName
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;  
                this.setState({displayName:this.state.UserLogin})
                this.setState({email:email})
                this.setState({uid:user.uid})
    
                if(localStorage.getItem('Username') == "null"){
                  if(this.state.username != ""){
                  localStorage.setItem("Username",this.state.username)
                  }
                  if(this.state.username == ""){
                    var db = firebase.firestore();
                      var docRef = db.collection("users").doc(this.state.user.uid);
    
                      docRef.get().then(function(doc) {
                          if (doc.exists) {
                             localStorage.setItem("Username",doc.data())
                             
                          }
                      })
                  }
                }
                if(localStorage.getItem('Username') != "null"){
                  this.setState({
                    valueToBePassed: localStorage.getItem('Username')
                  })
                }
            console.log(uid)
          
          
    
    
    
            var db = firebase.firestore();
    if(user){
      if(this.state.username != ""){
            db.collection("users").doc(this.state.displayName).set({
            name: localStorage.getItem('Username'),
            }).then(function() {
              console.log("Data Ojbect for new User created");
            });}
    
    
    
    
    
    if(this.state.username == ""){
      var docRef = db.collection("cities").doc("SF");
    
    docRef.get().then(function(doc) {
        if (doc.exists) {
      db.collection("users").doc(this.state.displayName).set({
        name: doc.data().name,
        }).then(function() {
          console.log("Data Ojbect for new User created");
         
        })
      
        } 
    })
    
    }
          }
    
          var docRef = db.collection("stories").doc(this.state.user.uid);
    
          docRef.get().then(function(doc) {
              if (doc.exists) {
                
                var hello = doc.data().story;
                console.log(hello)
                self.setState({myStory:hello})
                  console.log("Document data:", doc.data().story);
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });
       
    
         
        
    var docRef = db.collection("users").doc(this.state.user.uid);
    
        docRef.get().then(function(doc) {
            if (doc.exists) {
              var hello = doc.data().name;
              self.setState({newVT:hello})
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
        
            } else {
              this.setState({ user: null });
              if(localStorage.getItem('Username') != null){
                localStorage.setItem("Username",null)
    
              }
              this.setState({valueToBePassed:''})
            }
          });
    
        }
    

        submit(e){
         alert("aaye  ho")
          e.preventDefault();
            var db = firebase.firestore();
           
                db.collection("community").doc(this.state.uid).set({
                name:this.state.name,
                uid:this.state.uid,
                solution:this.state.solution,
                category:this.state.subject
                }).then(function() {
                  console.log("Data Ojbect for new User created");
                });
        
        
        
        }
    
        toggleFullStory(name){
          this.setState({nulledState:true})
          var db = firebase.firestore();
          db.collection("stories").doc(name).update({
              show:true
            }).then(function() {
              console.log("Data Ojbect for new User created");
            });
            window.location.reload();
        }
    
    
        logout(){
          firebase.auth().signOut();
        }
        
        handleChange(e){
          this.setState({[e.target.name]: e.target.value});
      }
      handleChangeUserLogin(e){
          this.setState({UserLogin:e.target.value})
      }

       
      newFun(e){
        e.preventDefault();

var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});

       }


    render() {
        return (
            <div class="container">
                {this.state.user?(<>
                  <div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div> <div class="" style={{paddingTop:100}}>
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Forms </h4>
                                    </div>
        
                                    <div class="p-4">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                        <label>Name <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input name="name" value={this.state.name} onChange={this.handleChangeName} id="name" type="text" class="form-control pl-5" placeholder="First Name :"/  >
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                        <label>Phone Number<span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-email ml-3 icons"></i>
                                                        <input name="PhoneNumber" id="PPhoneNumberhone" onChange={this.handleChangePhone} type="Phone" value={this.state.PhoneNumber} class="form-control pl-5" placeholder="Your PhoneNumber :"/>
                                                    </div> 
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group position-relative">
                                                        <label>Subject</label>
                                                        <i class="mdi mdi-book ml-3 icons"></i>
                                                        <input name="subject" onChange={this.handleChangeSubject} id="subject" class="form-control pl-5" placeholder="Subject of cause :"/>
                                                    </div>                                                                               
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group position-relative">
                                                        <label>Soluton/Plan</label>
                                                        <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                        <textarea name="solution" id="solution" value={this.state.solution} onChange={this.handleChangeSolution} rows="4" class="form-control pl-5" placeholder="Your Message :"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6 text-center">
                                                    <button  onClick={this.submit} class="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.logout}>logout</button></>):(<><h1>Login to continue</h1></>)}
           

            </div>
        )
    }
}

export default DoctorDash
