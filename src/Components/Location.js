import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'

export class Location extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            searchTerm:''
        }
    }
    componentDidMount() {
        
    }
    handleSubmit=()=>{
        let url='';
        Axios.post(url,{'search':this.state.searchTerm}).then(res => {
            console.log(res.data);
            console.log(res.error);
        })
    }
    handleChange=(e)=>{
        let name=e.target.name;
        this.setState({[name]:e.target.value})
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
                        <a  class="btn btn-primary">Logout</a>
                    </div>
                </div>
            </div>
        </header>
        <section class="section pt-5 mt-4">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:0}} allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
                        <div class="custom-form p-4 rounded shadow">
                            <div id="message"></div>
                            <form method="post"  name="contact-form" id="contact-form">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group position-relative">
                                            <label>Location: <span class="text-danger">*</span></label>
                                            <i class="mdi mdi-account ml-3 icons"></i>
                                            <input name="name" id="name" type="text" class="form-control pl-5" placeholder="Enter Location"/>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12 text-center">
                                                <input type="submit" id="submit" name="send" onClick={this.handleSubmit} class="submitBnt btn btn-primary btn-block" value="Send Message"/>
                                                <div id="simple-msg"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
        
            </div>
        )
    }
}

export default Location
