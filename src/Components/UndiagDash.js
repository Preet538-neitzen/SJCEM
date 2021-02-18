
import React, { Component } from 'react'
import fire from '../Config/Config'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export class UndiagDash extends Component {
    constructor(props)
    {
        super(props);
        this.state={    
            username:'username',
            no_likes:null,
            plan:'',
            prescription:null,
            no_comments:null,
            name:'',
            title:'',
            category:'',
            content:'',
            image:'',
            author:'',
            quote:'',
            url:'',
            comment:'',
            postedBy:'',
            liked:0,
            docSolutions:null,
            no_likes:0,
            no_comments:0,
            docName:'',
            docplanName:'',
            solution:'',
            accType:'',
            planArr:null
        }
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
       
        this.setState({[name]:value});
        console.log(this.state);
     }
    componentDidMount() {
        let myApp = this;
        var db=fire.firestore();
        var storage=fire.storage();
        
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                db.collection('users').doc(user.uid).get().then(temp => {
                    myApp.setState({accType:temp.data().accType})
                    console.log(temp.data().accType);
                })
                myApp.setState({username:user.email}); 
               db.collection('undiagnosed').doc(myApp.props.match.params.result_term).get().then(temp => {
                storage.ref('images').child(temp.data().image).getDownloadURL().then(url => {
                    myApp.setState({url});
                })
                   myApp.setState({
                        name:temp.data().name,
                        docSolutions:temp.data().docSolutions,
                        category:temp.data().category,
                        content:temp.data().content,
                        image:temp.data().image,
                        author:temp.data().author,
                        planArr:temp.data().plans


})
               });
               
            } else {
              console.log('Please log in');
            }
        });
        
    }
    insertSolution=()=>{
        var db=fire.firestore();
        let myApp = this;
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                db.collection('undiagnosed').doc(myApp.props.match.params.result_term).get().then(temp =>{
                    
                    if(temp.data().docSolutions)
                    {
                        db.collection('undiagnosed').doc(myApp.props.match.params.result_term).update({
                            docSolutions:[...temp.data().docSolutions,{
                                postedBy:myApp.state.docName,
                                comment:myApp.state.solution,
                                time:Date.now(),
                                
                            }]
                        })
                    }
                    else{
                        db.collection('undiagnosed').doc(myApp.props.match.params.result_term).update({
                            docSolutions:[{
                                postedBy:myApp.state.docName,
                                comment:myApp.state.solution,
                                time:Date.now()
                            }]
                        })
                    }
                    
                })
                
                console.log('solution  added');   
             
               
            } else {
              console.log('Please log in');
            }
        });
    }
    uploadPlan=()=> {
        var db=fire.firestore();
        let myApp = this;
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                db.collection('undiagnosed').doc(myApp.props.match.params.result_term).get().then(temp =>{
                    
                    if(temp.data().plans)
                    {
                        db.collection('undiagnosed').doc(myApp.props.match.params.result_term).update({
                            plans:[...temp.data().plans,{
                                postedBy:myApp.state.docplanName,
                                comment:myApp.state.plan,
                                time:Date.now(),
                                
                            }]
                        })
                    }
                    else{
                        db.collection('undiagnosed').doc(myApp.props.match.params.result_term).update({
                            plans:[{
                                postedBy:myApp.state.docplanName,
                                comment:myApp.state.plan,
                                time:Date.now()
                            }]
                        })
                    }
                    
                })
                
                console.log('plan  added');   
             
               
            } else {
              console.log('Please log in');
            }
        })
    }
    prescriptionUpload=(e)=>{
         const prescriptioncop = e.target.files[0];
        if (e.target.files[0]) {
            const prescription = e.target.files[0];
            this.setState(() => ({prescription}));
          }
          console.log(this.state.prescription);
         
     }
     uploadPlanfile=()=> 
     {
        
          let myApp = this;
        console.log('submit data');
        var db = fire.firestore();
        var storage = fire.storage();
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                
                const {prescription} = myApp.state;
                const uploadTask = storage.ref(`undiagnosedplans/${prescription.name}`).put(prescription);
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
                    console.log('task completed')
                    

                });
                
                
                console.log('plan uploaded');
                // myApp.props.history.push("/BlogPage");
            } else {
              console.log('plan was not created');
            }
          });
         
     }
    render() {
        return (
            <div>
            <div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
                            <div class="col mt-4 pt-2">
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Nav Tabs </h4>
                                    </div>
                                    
                                    <div class="p-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <ul class="nav nav-pills nav-justified flex-column flex-sm-row rounded" id="pills-tab" role="tablist">
                                                    <li class="nav-item">
                                                        <a class="nav-link rounded active" id="pills-cloud-tab" data-toggle="pill" href="#pills-cloud" role="tab" aria-controls="pills-cloud" aria-selected="false">
                                                            <div class="text-center pt-1 pb-1">
                                                                <h4 class="title font-weight-normal mb-0">Problem</h4>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    
                                                    <li class="nav-item">
                                                        <a class="nav-link rounded" id="pills-smart-tab" data-toggle="pill" href="#pills-smart" role="tab" aria-controls="pills-smart" aria-selected="false">
                                                            <div class="text-center pt-1 pb-1">
                                                                <h4 class="title font-weight-normal mb-0">Doctor's</h4>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    
                                                    <li class="nav-item">
                                                        <a class="nav-link rounded" id="pills-apps-tab" data-toggle="pill" href="#pills-apps" role="tab" aria-controls="pills-apps" aria-selected="false">
                                                            <div class="text-center pt-1 pb-1">
                                                                <h4 class="title font-weight-normal mb-0">Plans/Prescription</h4>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


<div class="row pt-2">
                                            <div class="col-12">
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade show active" id="pills-cloud" role="tabpanel" aria-labelledby="pills-cloud-tab">
                                                    <p class="text-muted mb-0">
                                                                 <h1>
                                                            {this.state.name}
                                                       </h1>
                                                       <p>
                                                            {this.state.content}
                                                       </p>
                                                        
                                                        </p> 
                                              
                                                    </div>
                                                    
                                                    <div class="tab-pane fade" id="pills-smart" role="tabpanel" aria-labelledby="pills-smart-tab">
                                                        <p class="text-muted mb-0">
                                                            {
                                                                this.state.accType=='Doctor'?<>

                                                                <div class="component-wrapper rounded shadow">
                                                                <div class="p-4 border-bottom">
                                                                    <h4 class="title mb-0"> Help a patient </h4>
                                                                </div>
                                    
                                                                <div class="p-4">
                                                                    <form>
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <div class="form-group position-relative">
                                                                                    <label>Your Name <span class="text-danger">*</span></label>
                                                                                    <i class="mdi mdi-account ml-3 icons"></i>
                                                                                    <input name="docName" id="docName" onChange={this.handleChange} type="text" class="form-control pl-5" placeholder="First Name :"/>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            
                                                                            <div class="col-md-12">
                                                                                <div class="form-group position-relative">
                                                                                    <label>Comments</label>
                                                                                    <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                                                    <textarea onChange={this.handleChange} name="solution" id="solution" rows="4" class="form-control pl-5" placeholder="Your Message :"></textarea>
                                                                                </div>


</div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-sm-12 text-center">
                                                                                <input onClick={this.insertSolution} class="btn btn-primary" value="Send Message"/>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                                </>:<></>
                                                            }
                                                            
                                                            {/* comments */}
                                <div class="p-4 shadow rounded mt-4 pt-2">
                                <h4 class="page-title pb-3">Recommendations :</h4>
                                <ul class="media-list list-unstyled mb-0">
                                    { 
                                       
                                        this.state.docSolutions ?
                                            this.state.docSolutions.map(comment => {
                                                let d=new Date(comment.time);
                                                let date=d.getDate();
                                                let year=d.getFullYear();
                                                let month= d.getMonth();
                                                let hour=d.getHours();
                                                let minute=d.getMinutes();
                                                let ampm = hour >= 12 ? 'pm' : 'am';
                                                hour = hour % 12;
                                                hour = hour ? hour : 12;
                                                minute = minute < 10 ? '0'+minute : minute;
                                                let dateString=date+' '+months[date]+', '+year+' at '+hour+':'+minute+' '+ampm;
                                                return (
                                                    <li class="comment-desk mt-4">
                                                        <a href="#" class="float-right text-muted"><i class="mdi mdi-reply"></i>&nbsp; Reply</a>
                                                        <div class="commentor">
                                                            <a class="float-left pr-3" href="#">
                                                                <img src="" class="img-fluid avatar avatar-md-sm rounded-pill shadow" alt="img"/>
                                                            </a>
                                                            <div class="overflow-hidden d-block">
                                                <h4 class="media-heading mb-0"><a href="javascript:void(0)" class="text-dark">{comment.postedBy}</a></h4>
                                                                <small class="text-muted">{dateString}</small>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p class="text-muted font-italic p-3 bg-light rounded">" {comment.comment} "</p>
                                                        </div>
                                                    </li>
                                                )


}
                                                
                                            )
                                            
                                            : <h2>No solutions to show</h2>
                                    }
                                    
                                    
                                   
                                </ul>
                            </div>
                            
                                                        </p>                       
                                                    </div>
                        
                                                    <div class="tab-pane fade" id="pills-apps" role="tabpanel" aria-labelledby="pills-apps-tab">
                                                        <p class="text-muted mb-0">
                                                        
                                                        {
                                                            this.state.accType=="Doctor"?
                                                            <>
                                                            <div class="col-md-12">
                                                            <div class="form-group position-relative">
                                                                <label>Your Name <span class="text-danger">*</span></label>
                                                                <i class="mdi mdi-account ml-3 icons"></i>
                                                                <input name="docplanName" id="docplanName" onChange={this.handleChange} type="text" class="form-control pl-5" placeholder="First Name :"/>
                                                            </div>
                                                        </div>
                                                            <div class="col-md-12">
                                                            <div class="form-group position-relative">
                                                                <label>Propose a plan :</label>
                                                                <i class="mdi mdi-comment-text-outline ml-3 icons"></i>
                                                                <textarea onChange={this.handleChange} name="plan" id="plan" rows="4" class="form-control pl-5" placeholder="Your Message :"></textarea>
                                                            </div>
    
                                                        </div> 
                                                        <div class="col-sm-12 text-center">
                                                            <input onClick={this.uploadPlan} id="submit" name="send" class="btn btn-primary" value="Send Message"/>
                                                        </div>   
                                                        <h2 class="text-center">OR</h2>
                                                        <div class="col-md-12 mt-md-4 mt-3 mt-sm-0">
                                                            <input type="file" onChange={this.prescriptionUpload} class="btn btn-primary mt-2"  />
                                                                {/* <a href="javascript:void(0)" class="btn btn-primary mt-2">Upload</a> */}<br/><br/>
                                                                <input onClick={this.uploadPlanfile} id="submit" name="send" class="btn btn-primary" value="Upload"/>
                                                            </div>
                                                            </>
                                                            :<>


</>
                                                        }
                                                        
                                                            <div class="p-4 shadow rounded mt-4 pt-2">
                                <h4 class="page-title pb-3">Plans :</h4>
                                <ul class="media-list list-unstyled mb-0">
                                    { 
                                       
                                        this.state.planArr ?
                                            this.state.planArr.map(comment => {
                                                let d=new Date(comment.time);
                                                let date=d.getDate();
                                                let year=d.getFullYear();
                                                let month= d.getMonth();
                                                let hour=d.getHours();
                                                let minute=d.getMinutes();
                                                let ampm = hour >= 12 ? 'pm' : 'am';
                                                hour = hour % 12;
                                                hour = hour ? hour : 12;
                                                minute = minute < 10 ? '0'+minute : minute;
                                                let dateString=date+' '+months[date]+', '+year+' at '+hour+':'+minute+' '+ampm;
                                                return (
                                                    <li class="comment-desk mt-4">
                                                        <a href="#" class="float-right text-muted"><i class="mdi mdi-reply"></i>&nbsp; Reply</a>
                                                        <div class="commentor">
                                                            <a class="float-left pr-3" href="#">
                                                                <img src="" class="img-fluid avatar avatar-md-sm rounded-pill shadow" alt="img"/>
                                                            </a>
                                                            <div class="overflow-hidden d-block">
                                                <h4 class="media-heading mb-0"><a href="javascript:void(0)" class="text-dark">{comment.postedBy}</a></h4>
                                                                <small class="text-muted">{dateString}</small>
                                                            </div>
                                                        </div>
                                                        <div class="mt-3">
                                                            <p class="text-muted font-italic p-3 bg-light rounded">" {comment.comment} "</p>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                                
                                            )
                                            
                                            : <h2>No solutions to show</h2>
                                    }
                                    
                                    
                                   
                                </ul>
                            </div>
                                                        </p>                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
            </div>
        )
    }
}

export default UndiagDash