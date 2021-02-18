import React, { Component } from 'react'
import fire from '../Config/Config'

export class ShowPost extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            category:'',
            name:'',
            solution:''
        }
    }
    componentDidMount() {
        var db=fire.firestore();
        let myApp=this;
        fire.auth().onAuthStateChanged(function(user) {
            if(user)
            {
                db.collection('community').doc(myApp.props.match.params.key_id).get().then(temp => {
                    myApp.setState({
                        name:temp.data().name,
                        category:temp.data().category,
                        
                        solution:temp.data().solution
                    })
                })
            }
            else 
            {
console.log('pledzd log in')
            }
        })

    }
    
    render() {
        return (
            <div>
            <div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
        <section class="section">
            <div class="container">
                <div class="row">
                  
                    <div class="col-lg-8 col-md-7">
                        <div class="mr-lg-3">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                                {/* <div class="position-relative">
                                    <img src="images\blog\01.jpg" class="img-fluid rounded-top" alt=""/>
                                </div> */}

                                {
                                    this.state.category.length!=0?<>
                                    <div class="content p-4">
                                    <h6><i class="mdi mdi-tag text-primary mr-1"></i><a href="" class="text-primary">{this.state.category}</a></h6>
                                    {/* <h6><i class="mdi mdi-tag text-primary mr-1"></i><a href="javscript:void(0)" class="text-primary"></a>, <a href="javscript:void(0)" class="text-primary">{this.state.category}</a></h6> */}
                                    <p class="text-muted mt-3">{this.state.name}</p>
                                   
                                    <p class="text-muted">{this.state.solution}</p>
                                    <div class="post-meta mt-3">
                                        <ul class="list-unstyled mb-0">
                                            
                                        </ul>
                                    </div>
                                </div>
                                    </>:<>
                                    <h2>NO post available</h2>
                                    </>
                                }
                                
                            </div>

                            

                      </div>      
                    </div>
                </div>
                </div>
        </section>
       
            </div>
        )
    }
}

export default ShowPost
