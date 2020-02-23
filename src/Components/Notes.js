

import React, { Component } from 'react'

export class Notes extends Component {
    constructor(props){
        super(props);
        this.state={
            Search:'',
            file:null
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        // this.handleChangePass = this.handleChangePass.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.newFun = this.newFun.bind(this);
        // this.login = this.login.bind(this);
        // this.signup = this.signup.bind(this);
        // this.alert = this.alert.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this)
        // // this.readFullStory = this.readFullStory.bind(this);
        // this.toggleFullStory = this.toggleFullStory.bind(this);
        // // this.onSignInSubmit = this.onSignInSubmit.bind(this);
      }

      fileUpload=(e)=>{
        if (e.target.files[0]) {
            const file = e.target.files[0];
            this.setState(() => ({file}));
          }
          console.log(this.state.file);
     }    
      handleChangeEmail(e){
          this.setState({Search:e.target.value})
      }

      componentDidMount() {
          //Name
          //Domain
           
          //when persom wants to upload
          //name
          //domain
          //rating
          //comments
      }
      submit=()=>{
          alert("You have entered   " + this.state.Search)
      }

    render() {
        return (
            <div>
            <div class="col mt-4 pt-2">
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Resources </h4>
                                    </div>
        
                                    <div class="p-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <ul class="nav nav-pills nav-justified flex-column flex-sm-row rounded" id="pills-tab" role="tablist">
                                                    <li class="nav-item" active>
                                                        <a class="nav-link rounded" id="pills-cloud-tab" data-toggle="pill" href="#pills-cloud" role="tab" aria-controls="pills-cloud" aria-selected="false">
                                                            <div class="text-center pt-1 pb-1">
                                                                <h4 class="title font-weight-normal mb-0">View Notes</h4>
                                                            </div>
                                                        </a>
                                                    </li>
                                                
                                                    <li class="nav-item">
                                                        <a class="nav-link rounded" id="pills-smart-tab" data-toggle="pill" href="#pills-smart" role="tab" aria-controls="pills-smart" aria-selected="false">
                                                            <div class="text-center pt-1 pb-1">
                                                                <h4 class="title font-weight-normal mb-0">Create Notes</h4>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    
                                                    


</ul>
                                            </div>
                                        </div>

                                        <div class="row pt-2">
                                            <div class="col-12">
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade" id="pills-cloud" role="tabpanel" aria-labelledby="pills-cloud-tab" >
                                                        <p class="text-muted mb-0">
                                                        <div class="col mt-4 pt-2">
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Subscribe Form </h4>
                                    </div>
        
                                    <div class="p-4 col mt-4">
                                        <form class="p-4 col mt-4">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <input name="Search" id="Search" value={this.state.Search} onChange={this.handleChangeEmail} type="Search" class="form-control" placeholder="Enter notes you wish to look up :" required="" aria-describedby="newssubscribebtn"/>
                                                    <div class="input-group-append">
                                                        <button onClick={this.submit} class="btn btn-primary submitBnt"id="newssubscribebtn">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                                                        </p>
                                                    </div>
                                                    
                                                    <div class="tab-pane fade" id="pills-smart" role="tabpanel" aria-labelledby="pills-smart-tab">
                                                        <p class="text-muted mb-0">
                                                        <div class="mt-3  text-md-left text-center d-sm-flex">
                                                           
                                                            <div class="mt-md-4 mt-3 mt-sm-0">
                                                            <input type="file" onChange={this.fileUpload} class="btn btn-primary mt-2"  />
                                                                {/* <a href="javascript:void(0)" class="btn btn-primary mt-2">Upload</a> */}
                                                                
                                                            </div>
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

export default Notes