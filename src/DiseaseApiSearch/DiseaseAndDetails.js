import React from "react";
import axios from 'axios'
// import fire from './Config/Config'
import firebase from 'firebase/app'
import { Redirect } from 'react-router-dom'

export default class Disease extends React.Component {
    constructor(){
        super();
        this.state={
            loading: true,
            person: null,
            loading1: true,
            person1: null,
            loading2: true,
            person2: null,
            people: [],
            invoiceList:[],
            diseaseInput:'',
            urls:[],
            url:'',
            user: null,
            email: '',
            name: '',
            subject:'',
            solution:'',
            redirect:false,
            disease:''
        }
        this.submit = this.submit.bind(this)
        this.handleDiseaseChange = this.handleDiseaseChange.bind(this)
        // this.componentWillMount = this.componentWillMount.bind(this)
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={this.state.url} />
        }
    }

  handleDiseaseChange(e){
      this.setState({
          diseaseInput:e.target.value
      })
      console.log("Value is", this.state.diseaseInput)
  }

  submit(e) {
    alert(this.state.diseaseInput)
   
    axios
    .get("https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms="+this.state.diseaseInput+"&df=info_link_data")
    .then(response =>
        // console.log(response.data[3][0][0])
        this.setState({url:response.data[3][0][0].split(',')[0]})
    ).then(response=>this.setState({disease:response.data[3][0][0].split(',')[1]})
        )
    .catch(error => this.setState({ error, isLoading: false }));
    // this.setState({

    //     invoiceList: [...this.state.invoiceList,data ]
    //   })
    //     console.log(this.state.invoiceList[0][1][1])
    //   for(var i=0;i<5;i++){
    //     console.log(this.state.invoiceList[0][3][i])
    //   }

  }


      
      
  halo=(value)=>{ 
    var newnewnew = value
    console.log("object",newnewnew)
   }

  

  render() {
    return (


      <div class="container">
      <div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
      <div >
                                <div class="component-wrapper rounded shadow">
                                    <div class="p-4 border-bottom">
                                        <h4 class="title mb-0"> Subscribe Form </h4>
                                    </div>
        
                                    <div class="p-4">
                                      
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <input name="email" id="email2" type="email" class="form-control" onChange={this.handleDiseaseChange} placeholder="Enter disease you wish to learn about.. Eg:Anorexia :" required="" aria-describedby="newssubscribebtn"/>
                                                    <div class="input-group-append">
                                                        <button class="btn btn-primary" href={this.state.val} onClick= {this.submit}>Subscribe</button>
                                                    </div>
                                                </div>
                                            </div>
                                       
                                    </div>
                                </div>
                            </div>



      <section class="section border-top">
     
      <div class="container" style={{paddingTop:'250px'}}>
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <div class="table-responsive crypto-table bg-white shadow rounded">
                            <table class="table mb-0 table-center">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{maxWidth: "150px"}}>URL</th>
                                        <th scope="col" style={{maxWidth: "40px"}}>Disease</th>
                                    </tr>
                                </thead>
                                <tbody>{this.renderRedirect()}
                                    <th>     <a href={this.state.url}>{this.state.url?(<><a href={this.state.url}>{this.state.url}</a></>):(<><h5>No such disease</h5></>)}</a></th>
                                    <th>     <a href={this.state.url}>{this.state.url?(<><a href={this.state.diseaseInput}>{this.state.diseaseInput}</a></>):(<><h5>No such disease</h5></>)}</a></th>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
          
        </section>
      </div>
    );
  }
}

