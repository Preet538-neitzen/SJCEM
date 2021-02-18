import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
            <header id="topnav" class="defaultscroll sticky nav-sticky">
            <div class="container">
           
                <div>
                    <a class="logo" href="index.html">HackerBrews!!<span class="text-primary">.</span></a>
                </div>                 
                <div class="buy-button">
                    <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary">{this.props.name}</a>
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
                        <li><a href="index.html"></a></li>
                        <li class="has-submenu active">
                            <a href="javascript:void(0)"></a><span class="menu-arrow"></span>
                            <ul class="submenu megamenu">
                                <li class="active">
                                    <ul>
                                       
                                    </ul>
                                </li>
                                <li>
                                  
                                </li>   
                            </ul>
                        </li>
        
                        <li class="has-submenu">
                            <a href="javascript:void(0)"></a>
                            <ul class="submenu">
                                <li><a href="page-aboutus.html"> About Us</a></li>
                                <li><a href="page-services.html">Services</a></li>
                                <li><a href="page-pricing.html">Pricing</a></li>
                                <li><a href="page-team.html"> Team</a></li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Account <span class="badge badge-danger rounded"> v1.6 </span></a>
                                    <ul class="submenu">
                                        <li><a href="page-profile.html">Profile <span class="badge badge-primary rounded">New</span></a></li>
                                        <li><a href="page-profile-edit.html">Account Setting <span class="badge badge-primary rounded">New</span></a></li>
                                        <li><a href="page-invoice.html">Invoice <span class="badge badge-primary rounded">New</span></a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)">  <span class="badge badge-success rounded"> Added </span></a><span class="submenu-arrow"></span>
                                    <ul class="submenu">
                                        <li><a href="page-jobs.html">Jobs</a></li>
                                        <li><a href="page-job-detail.html">Job Detail</a></li>
                                        <li><a href="page-job-apply.html">Job Apply</a></li>
                                        <li><a href="page-job-company.html">Company <span class="badge badge-success rounded"> New </span></a></li>
                                        <li><a href="page-job-candidate.html">Candidate <span class="badge badge-success rounded"> New </span></a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Blog</a>
                                    <ul class="submenu">
                                        <li><a href="page-blog.html">Blog Grid</a></li>
                                        <li><a href="page-blog-sidebar.html">Blog with Sidebar</a></li>
                                        <li><a href="page-blog-detail.html">Blog Detail</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Works</a>
                                    <ul class="submenu">
                                        <li><a href="page-work.html">Works Grid</a></li>
                                        <li><a href="page-work-detail.html">Work Detail</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> User </a>
                                    <ul class="submenu">
                                        <li><a href="page-login.html">Login</a></li>
                                        <li><a href="page-signup.html">Signup</a></li>
                                        <li><a href="page-recovery-password.html">Recovery Password</a></li>
                                        <li><a href="page-cover-login.html">Login 2</a></li>
                                        <li><a href="page-cover-signup.html">Signup 2</a></li>
                                        <li><a href="page-cover-re-password.html">Recovery Password 2</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Utility </a>
                                    <ul class="submenu">
                                        <li><a href="page-terms.html">Terms of Services</a></li>
                                        <li><a href="page-privacy.html">Privacy Policy</a></li>
                                    </ul>  
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Special </a>
                                    <ul class="submenu">
                                        <li><a href="page-comingsoon.html">Coming Soon</a></li>
                                        <li><a href="page-comingsoon2.html">Coming Soon Two </a></li>
                                        <li><a href="page-maintenance.html">Maintenance</a></li>
                                        <li><a href="page-error.html">Error</a></li>
                                    </ul>
                                </li>
                                <li class="has-submenu"><a href="javascript:void(0)"> Contact </a>
                                    <ul class="submenu">
                                        <li><a href="page-contact-detail.html">Contact Detail </a></li>
                                        <li><a href="page-contact-one.html">Contact One </a></li>
                                        <li><a href="page-contact-two.html">Contact Two </a></li>
                                        <li><a href="page-contact-three.html">Contact Three </a></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                        <li class="has-submenu last-elements">
                            <a href="javascript:void(0)"></a>
                            <ul class="submenu">
                                <li><a href="documentation.html">Documentation </a></li>
                                <li><a href="changelog.html">Changelog </a></li>
                                <li><a href="components.html">Components</a></li>
                                <li><a href="widget.html">Widget <span class="badge badge-success rounded"> Added </span></a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="buy-menu-btn d-none">
                        <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </header>
            </div>
        )
    }
}

export default Header
