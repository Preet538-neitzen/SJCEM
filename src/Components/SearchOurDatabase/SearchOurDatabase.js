import React, { Component } from 'react'
import fire from '../../Config/Config'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom';


export class SearchOurDatabase extends Component {
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
          UserLogin:'',
          datalog:[],
          wishToSearch:''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.newFun = this.newFun.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.readFullStory = this.readFullStory.bind(this);
        this.toggleFullStory = this.toggleFullStory.bind(this);
        this.handleChangeUserLogin = this.handleChangeUserLogin.bind(this);
        this.handleChangewishToSearch = this.handleChangewishToSearch.bind(this)
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
        handleChangewishToSearch(e){
            this.setState({wishToSearch:e.target.value})
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
            let self = this
            var db = firebase.firestore()
            
            db.collection("community").where("category", "==", this.state.wishToSearch)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                   let value =  doc.data()
                    self.setState({
                        datalog:[...self.state.datalog,value]
                    })
                });
            }).then(console.log("Value is",self.state.datalog)
                )
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
            console.log("Are",this.state.datalog)


        }

        submit=(e)=>{
            let self = this
            var db = firebase.firestore()
            
            db.collection("community").where("category", "==", this.state.wishToSearch)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                   let value =  doc.data()
                    self.setState({
                        datalog:[...self.state.datalog,value]
                    })
                });
            }).then(console.log("Value is",self.state.datalog)
                )
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
            console.log("Are",this.state.datalog)

        
        
        
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

  
        
    render() {
        return (
<>

<div >
<div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Subscribe Form </h4>
                                    </div>
        
                                   
                                      
                                            <div class="form-group">
                                                <div class="input-group mb-3" style={{width:'500px',marginLeft:'500px'}}>
                                                    <input name="wishToSearch" id="wishToSearch" type="wishToSearch" class="form-control" onChange={this.handleChangewishToSearch} placeholder="Your curiosity :" required="" value={this.state.wishToSearch} aria-describedby="newssubscribebtn"/>
                                                   
                                                </div>
                                                <button class="btn btn-primary"  onClick= {this.submit}>Subscribe</button>
                                            </div>
                                       
                                  
                                </div>
                            </div>


{this.state.datalog.map(temp => {
    return(

        
        <div class="container" style={{paddingTop:100,width:"550px"}}>
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <Link to={"/show/"+temp.uid}>

                        <div class="p-4 shadow rounded border">
                            <h5>Regarding :{temp.category}</h5>
                            Solution:
                            <p class="text-muted alert alert-success">{temp.solution}</p>
                            <h5>Information Provided Voluntarily :</h5>
                            <small class="text-dark user d-block"><i class="mdi mdi-account"></i> {temp.name}</small>
                            <small class="text-dark date"><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small>
                        </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
    )
})}
 
           </>
        )
    }
}

export default SearchOurDatabase

