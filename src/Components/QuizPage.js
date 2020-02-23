import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import PieChart from './Chart';
import ColumnChart from './BarGraph';

export class QuizPage extends Component {
    constructor(props)
    {
        super(props);
        this.state={

        }
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
                 <header id="topnav" class="defaultscroll sticky bg-white">
            <div class="container">
                
                <div>
                    <a class="logo" href="index.html">Tasks</a>
                </div>                 
                <div class="buy-button">
                    <a  class="btn btn-primary">Logout</a>
                </div>
                
                <div class="menu-extras">
                    <div class="menu-item">
                        
                        <a class="navbar-toggle">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        
                    </div>
                </div>
        
                <div id="navigation">
                      
                    <ul class="navigation-menu">
                        <li><Link to="/student">Home</Link></li>
                        
                       
                    </ul>
                    <div class="buy-menu-btn d-none">
                        <a class="btn btn-primary">Logout</a>
                    </div>
                </div>
            </div>
            </header>
            <section class="section">
                    <div class="container">
                        <div class="row ">
                            <div class="col-lg-6 col-md-6 mb-4 pb-2">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                                <PieChart/>
                            </div>
                        
                            </div>
                            
                            <div class="col-lg-6 col-md-6 mb-4 pb-2">
                            <div class="blog position-relative overflow-hidden shadow rounded">
                              <ColumnChart/>
                            </div>
                              
                            </div>
                            
                            <div class=" col-lg-12 col-md-12 mb-12 pb-12">
                                
                            </div>
                            
                        </div>
                    </div>
                </section>
            <section class="section" style={{paddingTop:"10px"}} >
                <h2>Take the quiz below!!!</h2>
            <div class="container mt-100 mt-60" id="portfolio">
                <div class="row text-center">
                    

                    {/* <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="work-container position-relative d-block overflow-hidden rounded">
                            <a class="mfp-image d-inline-block" href="/BlogPage" title="">
                                <img src="images\single\community.png" class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                            </a>
                            <div class="content personal-port">
                                <a class="title text-white d-block font-weight-bold"></a>
                                <small class="text-light">Carrier Guidance</small>
                            </div>
                            <div class="client personal-port">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Read Community Blogs</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i> Code Black</small>
                            </div>
                        </div>
                    </div> */}
                        <div class="col-lg-4 "style={{marginLeft:'35%'}}>
                        <div class="work-container position-relative d-block overflow-hidden rounded">
                            <a class="mfp-image d-inline-block"  href="/Quiz" title="">
                                <img src="images\single\QuizSkyWritingGeneric_large (1).jpg" class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                            </a>
                            <div class="content personal-port">
                                <a  class="title text-white d-block font-weight-bold">Shifting Perspective</a>
                                <small class="text-light">Quiz</small>
                            </div>
                            <div class="client personal-port">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> Play a quiz & learn</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i>Code Black</small>
                            </div>
                        </div>
                    </div>
{/* <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="work-container position-relative d-block overflow-hidden rounded">
                            <a class="mfp-image d-inline-block" href="/Bot"  title="">
                                <img src="images\single\340-3403351_chatbots-builder-pricing-crozdesk-robot-icon-png-white.png" class="img-fluid rounded" alt="work-image"/>
                                <div class="overlay-work"></div>
                            </a>
                            <div class="content personal-port">
                                <a class="title text-white d-block font-weight-bold">Bot Interaction !</a>
                                <small class="text-light">Ruled Based Bot</small>
                            </div>
                            <div class="client personal-port">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i>Chat with our bot</small>
                                <small class="text-light date"><i class="mdi mdi-calendar-check"></i>Code Black</small>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        
        </section>
        
            </div>
        )
    }
}

export default QuizPage
