
import React, { Component } from 'react'

export class Distress extends Component {
    render() {
        return (
            <div>
            <section class="bg-half-170 border-bottom" id="home">
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-7">
                                <div class="title-heading mt-4">
                                    <div class="alert alert-light alert-pills shadow" role="alert">
                                        <span class="badge badge-success rounded mr-1">v1.5</span>
                                        <span class="content"> Help <span class="text-primary">Us </span>Help You</span>
                                    </div>
                                    <h1 class="heading mb-3">Leading Site For Best Councellors <span class="element text-primary" data-elements="Agency, Software, Technology, Studio, Webapps"> </span><span class="typed-cursor"></span> </h1>
                                    <p class="para-desc text-muted">Let us know your issue and we can help you out !!.</p>
                                    <div class="mt-4">
                                        <a href="/DistressInfoPage" class="btn btn-outline-primary rounded"><i class="mdi mdi-google-my-business"></i>Never Settle</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div class="position-relative">
                                    <img src="images\busi01.jpg" class="rounded img-fluid mx-auto d-block" alt=""/>
                                    <div class="play-icon">
                                        <a href="http://vimeo.com/287684225" class="play-btn video-play-icon">
                                            <i class="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </a>
                                    </div>
                                </div>
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

export default Distress