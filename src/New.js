
import React, { Component } from 'react'
import fire from './Config/Config'
import firebase from 'firebase/app'
import UserSignIn from './UserSignIn';
import Header from './UpAndDown/Header'
import PieChart from './Components/Chart'
import ColumnChart from './Components/BarGraph'
import Student from './Components/Student';
import TeacherDash from './Components/TeacherDash';

export class New extends Component {
    constructor(props){
        super(props);
        this.state={
            person:'',
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
          readFullStory:false,
          storyDescription:'',
          newDataObj:{
            story:'',
            name:'',
            storyDescription:'',
            show:false,
          },
          bool:null,
          displayFullStory:false,
          nulledState:false,
          errorMessage:'',
          VerificationCode:'',
          UserLogin:''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.newFun = this.newFun.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.readFullStory = this.readFullStory.bind(this);
        this.toggleFullStory = this.toggleFullStory.bind(this);
        this.handleChangeUserLogin = this.handleChangeUserLogin.bind(this);
        // this.onSignInSubmit = this.onSignInSubmit.bind(this);
      }
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
        handleChangeEmail(e){
          this.setState({email:e.target.value})
        }
    
        handleChangePass(e){
          this.setState({password:e.target.value})
        }
    
    
        login(e) {
          e.preventDefault();
          fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

          }).catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            });
        }
      
      
      
        signup(e){
          e.preventDefault();
          fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).then((u)=>{})
          .catch((error) => {
              console.log(error);
              this.setState({errorMessage:error.message});
            })
        }
    
 
        componentDidMount(){


//   if(!this.state.user){
        
        //     firebase.auth().signInWithPopup(provider).then(function(result) {
        //       // This gives you a Google Access Token. You can use it to access the Google API.
        //       var token = result.credential.accessToken;
        //       // The signed-in user info.
        //       var user = result.user;
        //       // ...
        //     }).catch(function(error) {
        //       // Handle Errors here.
        //       var errorCode = error.code;
        //       var errorMessage = error.message;
        //       // The email of the user's account used.
        //       var email = error.email;
        //       // The firebase.auth.AuthCredential type that was used.
        //       var credential = error.credential;
        //       // ...
        //     });
           
        //   }
          console.log(this.state.newDataObj)
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
       
    
          db.collection("stories").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data().story);
                self.setState(prevState => ({
                  newDataObj: {                   // object that we want to update
                      ...prevState.newDataObj,    // keep all other key-value pairs
                      name: doc.id,
                      story:doc.data().story,
                      storyDescription:doc.data().storyDescription,
                      bool: doc.data().show ,
                      likes:100  ,
                      show:doc.data().show    // update the value of specific key
                  },
              }))
              self.setState({ allStories: [...self.state.allStories,self.state.newDataObj ] }) //simple value
              // self.setState({newDataObj:doc.id=doc.data()})
              console.log(self.state.allStories)
          
              
                self.setState({ peopleId: [...self.state.peopleId, doc.id ] }) //simple value
                self.setState({storyDescription : doc.data().storyDescription})
                    
            }); 
            console.log(self.state.bool)
            // console.log(self.state.allStories)
      // console.log(self.state.peopleId)
      console.log(self.state.storyDescription)
            
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
    
        // componentDidMount() {
    
        //   fire.auth().onAuthStateChanged((user) => {
        //   if(user){
        //     if(localStorage.getItem('Username') == "null"){
        //       localStorage.setItem("Username",this.state.username)
        //     }
        //   }
        // })
        // }
        submit=(e)=>{
          let self = this
          e.preventDefault();
         console.log('hi')
         this.setState({text:""})
        
        
        
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

}).catch(function(error) {
 
});


}
       setGender(event) {
        console.log(event.target.value);
        localStorage.setItem("Profession",event.target.value)
      }
        handlePerson=(e)=>{
            let val=e.target.value;
            console.log('oersdsn:'+val);
            this.setState({person:val});
        }
    render() {
        return (
<>


 <div>
     
     
                {this.state.user?(<> 
                 
                <Header name={this.state.displayName}/>
             

                   <section class="bg-home"  id="home">
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-8 col-md-9">
                                <div class="title-heading mt-4">
                                    <h1 class="display-3 font-weight-bold mb-3">Here I'm {this.state.displayName} <br/> <span class="element" data-elements="Calvin Carlo, UI/UX Designer, Web Developer"></span> </h1>
                                    <p class="para-desc text-muted">Launch the website of Code Black and Gain Meaniningfull Insights.</p>
                                    <div class="mt-4 pt-2">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
           {this.state.user.emailVerified?(<>    <section class="section" style={{paddingTop:"10px"}} >
             {
         this.state.person=='Student'?<Student/>:<TeacherDash/>
     }

        
        </section>
        </>):(<><div class="form-group">


                <a class="btn btn-outline-primary" onClick={this.newFun}>Verfiy Your Account</a>
              </div></>)}
                 <button style={{paddingTop:'100p'}} class="btn btn-outline-primary m-3 mb-4" onClick={this.logout}>Logout</button> </>):(<> <div>
      
            
            <div class="back-to-home rounded d-none d-sm-block">
                <a href="/" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
                <section class="bg-home">
                <div class="home-center">
                    <div class="home-desc-center">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-6">
                                    <div class="mr-lg-5">   
                                        <img src="images\user\login.png" class="img-fluid d-block mx-auto" alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div class="login-page bg-white shadow rounded p-4">
                                        <div class="text-center">
                                            <h4 class="mb-4">Login</h4>  
                                        </div>
                                        <form class="login-form">
                                            <div class="row">


<div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Your Username <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input type="email" class="form-control pl-5" onChange={this.handleChangeUserLogin} value={this.state.UserLogin} placeholder="Username" name="UserLogin" required=""/>
                                                    </div>
                                                </div>


                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Your Email <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-account ml-3 icons"></i>
                                                        <input type="email" class="form-control pl-5" onChange={this.handleChangeEmail} value={this.state.email} placeholder="Email" name="email" required=""/>
                                                    </div>
                                                </div>

                                                <div >
          <input type="radio" onChange={this.handlePerson} value="Student" name="gender"/> Student
          <input type="radio" onChange={this.handlePerson} value="Teacher" name="gender"/> Teacher
        </div>

        
                                                <div class="col-lg-12">
                                                    <div class="form-group position-relative">
                                                        <label>Password <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-key ml-3 icons"></i>
                                                        <input type="password" value={this.state.password} name="password" class="form-control pl-5" onChange={this.handleChangePass} placeholder="Password" required=""/>
                                                    </div>
                                                </div>
    
                                         
                                                <div class="col-lg-12 mb-0">
                                                    <button onClick={this.login} class="btn btn-primary w-100">Sign in</button>
                                                </div>
                                                <div class="col-lg-12 mt-4 text-center">
                                                    <h6>Or Login With</h6>
                                                    <ul class="list-unstyled social-icon mb-0 mt-3">
                                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="Facebook"></i></a></li>
                                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-google-plus" title="Google"></i></a></li>
                                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-github-circle" title="Github"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 text-center">
                                                    <p class="mb-0 mt-3"><small class="text-dark mr-2">Don't have an account ?</small> <a href="/SignIn" class="text-dark font-weight-bold">Sign Up</a></p>


<h7  style={{color:'red',fontWeight:'bold',paddingLeft:'50px',paddingRight:'60px'}}>{this.state.errorMessage}</h7> 
                                                </div>
                                            </div>
                                        </form>
                                      
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div>
            </section> 

                </div>  </>)}
         
            </div>
         
           </>
        )
    }
}

export default New