import React, { Component } from 'react'
import Header from '../UpAndDown/Header'
import { Link } from 'react-router-dom'

export class Doctor extends Component {
    state={
        chatApp:'http://localhost:3003/#/login',
        NLP:'http://127.0.0.1:8080/'
    }
    render() {
        return (
            <div>
                <Header/>
        <section class="section">
           
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-12 p-3">
                        <Link to="/BlogPage">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\pen.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Diagnosed</h4>
                               
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                    
                    <div class="col-md-4 col-12 p-3">
                        <Link to="/viewProblem">
                            <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\video.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Undiagnosed</h4>
                                
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                    
                    <div class="col-md-4 col-12 p-3 ">
                        <Link to="/Disease">
                            <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\intellectual.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Disease checker</h4>
                              
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                    <div class="col-md-4 col-12 p-3">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\intellectual.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Chat with patients and other doctors</h4>
                                <a  href={this.state.chatApp} class="text-muted mb-0">This feature is highly helpful to the disabled ones</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 p-3">
                        <Link to="/DoctorDash">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\video.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Community</h4>
                               
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                    
                    
                </div>
            </div>
           
            
        </section>
            </div>
        )
    }
}

export default Doctor