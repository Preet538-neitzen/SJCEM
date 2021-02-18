import React, { Component } from 'react'
import Header from '../UpAndDown/Header'
import BMI from './BMI'

export class Patient extends Component {
    state={
        chatApp:'http://localhost:3003/#/login',
        NLP:'http://127.0.0.1:8080/'
    }
    render() {
        return (
            <div>
               <Header/>
               <div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-12 p-3">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\pen.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Diagnosed</h4>
                                <a href='/BlogPage' class="text-muted mb-0">Diagnosed Probelms to learn more about them</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 p-3">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\video.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Undiagnosed</h4>
                                <a href='postProblem' class="text-muted mb-0">Can Post and get Info from doctors</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 p-3 ">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\intellectual.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Disease Finder using NLP</h4>
                                <a href={this.state.NLP} class="text-muted mb-0">To be Revelaled</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 p-3">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\pen.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Disease Info</h4>
                                <a href='/Disease' class="text-muted mb-0">The above page takes you to the most secure, verified and informative health disease api over the internet...</a>
                            </div>
                        </div>  
                    </div>
                    
                    <div class="col-md-4 col-12 p-3">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\video.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Find Doctors Information Around You Or Anywhere around the globe !!</h4>
                                <a href='/SimpleMap' class="text-muted mb-0">Powered by Google</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-12 p-3">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <img src="images\icon\intellectual.svg" alt=""/>
                            </div>

                            <div class="content mt-4">
                                <h4 class="title-2">Chat with Doctors and other</h4>
                                <a  href={this.state.chatApp} class="text-muted mb-0">This feature is highly helpful to the disabled ones</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <img src="images\saas\2.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title ml-lg-3">
                             <BMI/>
                            </div>
                    </div>
                </div>
            </div>
        </section>
     
                
            </div>
        )
    }
}

export default Patient
