import React, { Component } from 'react'
import axios from 'axios'
import Header from '../UpAndDown/Header'
import GoogleMapReact from 'google-map-react';
import {mdiMapMarker} from '@mdi/js'
import Icon from '@mdi/react'
import fire from '../Config/Config'
import firebase from 'firebase/app'


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export class AddProfile extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
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
          displayMenu: false,
          name:'',
          address:'',
          ngoName:'',
          lastName:'',
          typeOfNeedy:'',
          city:'',
          state:'',
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
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.readFullStory = this.readFullStory.bind(this);
        this.toggleFullStory = this.toggleFullStory.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleChangeCity = this.handleChangeCity.bind(this);
       this.handleChangeType = this.handleChangeType.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
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
              this.setState({ user });
              var user = firebase.auth().currentUser;
              var name, email, photoUrl, uid, emailVerified,data;
              
              data = this.state.displayName
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;  
                this.setState({displayName:uid})
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

         handleSubmit(){
 
                    var db = firebase.firestore();
                   
                   
                    db.collection("needy").doc().set({
                       name:this.state.name,
                       lastName:this.state.lastName,
                       city:this.state.city,
                       state:this.state.state,
                       typeOfNeedy:this.state.typeOfNeedy,
                       ngoName:this.state.ngoName
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
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


    static defaultProps = {
        center: {
          lat: 20,
          lng: 78,
        },
        zoom: 2
      };
    
    

       handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }


  


  handleChangeCity(e){
      this.setState({city:e.target.value})
    if(e.target.value=='Mumbai' || e.target.value=='Pune' || e.target.value=='Nagpur' || e.target.value=='Thane' || e.target.value=='Ratnagiri'){
        this.setState({state:'Maharashtra'})
        this.setState({lat:21.1458})
        this.setState({lng:79.0882})
    }
    if(e.target.value=='Jaipur' || e.target.value=='Jodhpur' || e.target.value=='Bikaner' || e.target.value=='Ajmer'){
        this.setState({state:'Rajasthan'})
        this.setState({lat:26.2389})
        this.setState({lng:73.0243})
        // window.location.reload();
    }
  }
  handleChangeType(e){
    this.setState({typeOfNeedy:e.target.value});
    if(e.target.value=="Orphan" && this.state.state=='Maharashtra'){
        this.setState({ngoName:'Sneha Sadan Orphanage'})
    }
    if(e.target.value=="Orphan" && this.state.state=='Rajasthan'){
        this.setState({ngoName:'Sneha Sadan Orphanage'})
    }
    if(e.target.value=="Poverty"){
        this.setState({ngoName:"Smile Foundation:India"})
    }
    if(e.target.value=="Widow" && this.state.state=="Maharashtra"){
        this.setState({ngoName:'Little Sisters of The Poor Home For Aged'})
    }
    if(e.target.value=="Widow" && this.state.state=="Rajasthan"){
        this.setState({ngoName:'Andhakshi Ashram'})
    }
    if(e.target.value=="Old Age"){
        this.setState({ngoName:''})
    }
    if(e.target.value=="Poverty"){
        this.setState({ngoName:''})
    }

  }
  

    render() {
        return (
            <div>
          <Header/>
    
        <section class="section pb-0 ">
          
            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                        <div class="pt-5 pb-5 p-4 bg-light shadow rounded">
                            <h4>Help the Needy !</h4>
                            <h6>Add the details of person in need...</h6>
                            <div class="custom-form mt-4">
                                <div id="message"></div>
                                <form >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label> Name <span class="text-danger">*</span></label>
                                                <i class="mdi mdi-account ml-3 icons"></i>
                                                <input  autoComplete='off' name="name" value={this.state.name}  onChange={this.handleChange} id="name" type="text" class="form-control pl-5" placeholder="First Name :"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label>Surname <span class="text-danger">*</span></label>
                                                <i class="mdi mdi-email ml-3 icons"></i>
                                                <input  autoComplete='off' value={this.state.lastName}  onChange={this.handleChange} name="lastName" id="lastName" type="email" class="form-control pl-5" placeholder="Surname :"/>
                                            </div> 
                                        </div>
                                        <div class="col-md-12">
                                        
                                   </div>
                                               
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label>City</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input  autoComplete='off' value={this.state.city}   onChange={this.handleChangeCity} name="typeOfNeedy" id="typeOfNeedy" class="form-control pl-5" placeholder="(Enter his/her city) :"/>
                                            </div>                                                                               
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group position-relative">
                                                <label>State</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input  autoComplete='off' value={this.state.state}   onChange={this.handleChange} name="typeOfNeedy" id="typeOfNeedy" class="form-control pl-5" placeholder="(Autofilled)"/>
                                            </div>                                                                               
                                        </div>
                                        <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
          <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text={<Icon path={mdiMapMarker}
            size={1.4}/>}
          />
        </GoogleMapReact>
      </div>
                       
                       
                                           
                                         
                                     
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Type</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input autoComplete='off' value={this.state.typeOfNeedy}   onChange={this.handleChangeType} name="typeOfNeedy" id="typeOfNeedy" class="form-control pl-5" placeholder="Need of person :"/>
                                            </div>                                                                               
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label>Name Of NGO</label>
                                                <i class="mdi mdi-book ml-3 icons"></i>
                                                <input value={this.state.ngoName} onChange={this.handleChange} name="ngoName" id="ngoName" class="form-control pl-5" placeholder="Your subject :"/>
                                            </div>                                                                               
                                        </div>
                                       
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-6 order-1 order-md-2">
                        <img src="images\contact.png" class="img-fluid" alt=""/>
                        <button type="submit" onClick={this.handleSubmit} >Click ME</button>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-100 mt-60">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="map">
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default AddProfile
