// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import Geocode from "react-geocode";
// import fire from '.././Config/Config'
// import firebase from 'firebase/app'
// import ReactGoogleMapLoader from "react-google-maps-loader"
// import ReactGooglePlacesSuggest from "react-google-places-suggest"
 
// // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.

 


// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 

// Geocode.setApiKey("AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo");
// // set response language. Defaults to english.
// Geocode.setLanguage("en");
 
// // set response region. Its optional.
// // A Geocoding request with region=es (Spain) will return the Spanish city.
// Geocode.setRegion("es");
 
// // Enable or disable logs. Its optional.
// Geocode.enableDebug();
 
// var db = firebase.firestore();
   
// var docRef = db.collection("nayamapper").doc('BorWest');
    
//           docRef.get().then(function(doc) {
//               if (doc.exists) {
                
              
//                   console.log("Document data (Lat obtained is---):", doc.data());
//                   const useable = doc.data
//                   // Get address from latidude & longitude.
// Geocode.fromLatLng(useable, "2.2922926").then(
//     response => {
//       const address = response.results[0].formatted_address;
//       console.log(address);
//     },
//     error => {
//       console.error(error);
//     }
//   );
//               } 
//           }).catch(function(error) {
//               console.log("Error getting document:", error);
//           });



 
// // Get latidude & longitude from address.
// Geocode.fromAddress("Dubai").then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     localStorage.setItem('lat', lat)
//     console.log(lat, lng);
//     var db = firebase.firestore();
   

//                         db.collection("nayamapper").doc('BorWest').set({
//                         name: localStorage.getItem('lat'),
//                         }).then(function() {
//                         console.log("Data Ojbect for new address created");
//                         });
    
//   },
//   error => {
//     console.error(error);
//   }
// );


// class SimpleMap extends Component {

    
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
  
//   constructor(props){
//     super(props);
//     this.state = {
//         lat:-33.8670522 ,
//         lng:151.1957362
//     }
//   }
//   componentWillMount() {
 
//     var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
//     targetUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.state.lat +  ',' + this.state.lng + '&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo'
//     // targetUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ 19.000121 +','+ 72.21212 + '&radius=1500&type=gym&key=AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo'
// fetch(proxyUrl + targetUrl)
//   .then(blob => blob.json())
//   .then(data => {
//     console.log("Restaurant name is111:",data.results[1]);
//     console.log("Restaurant name is:",data.results[2].name);
//     document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
//     return data;
//   })
//   .catch(e => {
//     console.log(e);
//     return e;
//   });


      

//       let self = this
//     var db = firebase.firestore();
//     var docRef = db.collection("nayamapper").doc("BorWest");
    
//     docRef.get().then(function(doc) {
//         if (doc.exists) {
//             self.setState({lat:doc.data})
//             console.log(self.lat)
//         } 
//     })
//   }
 
 
  
 
//   render()
//    {
//     return (
   
//       <div style={{ height: '44vh', width: '75%' }}>
//       <GoogleSuggest/>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key:'AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo'}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
 
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;


 
// const MY_API_KEY = "AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo" 
 
//   class GoogleSuggest extends React.Component {
//     state = {
//         search: "",
//         value: "",
//     }
 
//     handleInputChange = e => {
//         this.setState({search: e.target.value, value: e.target.value})
//     }
 
//     handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
//         console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
//         this.setState({
//             search: "",
//             value: geocodedPrediction.formatted_address,
//         })
//     }
 
//     handleNoResult = () => {
//         console.log("No results for ", this.state.search)
//     }
 
//     handleStatusUpdate = status => {
//         console.log(status)
//     }
 
//     render() {
//         const {search, value} = this.state
//         return (
//             <ReactGoogleMapLoader
//                 params={{
//                     key: MY_API_KEY,
//                     libraries: "places,geocode",
//                 }}
//                 render={googleMaps =>
//                     googleMaps && (
//                         <ReactGooglePlacesSuggest
//                             googleMaps={googleMaps}
//                             autocompletionRequest={{
//                                 input: search,
//                                 // Optional options
//                                 // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
//                             }}
//                             // Optional props
//                             onNoResult={this.handleNoResult}
//                             onSelectSuggest={this.handleSelectSuggest}
//                             onStatusUpdate={this.handleStatusUpdate}
//                             textNoResults="My custom no results text" // null or "" if you want to disable the no results item
//                             customRender={prediction => (
//                                 <div className="customWrapper">
//                                     {prediction
//                                         ? prediction.description
//                                         : "My custom no results text"}
//                                 </div>
//                             )}
//                         >
//                             <input
//                                 type="text"
//                                 value={value}
//                                 placeholder="Search a location"
//                                 onChange={this.handleInputChange}
//                             />
//                         </ReactGooglePlacesSuggest>
//                     )
//                 }
//             />
//         )
//     }
// }


import React, { Component } from 'react'
import  Footer from '../UpAndDown/Footer'


export class Dashboard extends Component {
    render() {
        return (
            <div>

            <header id="topnav" class="defaultscroll sticky">
            <div class="container">
              
                <div>
                    <a class="logo" href="index.html">Pator</a>
                </div>                 
                <div class="buy-button">
                    <a href="/SignIn"  class="btn btn-primary">Get Started</a>
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
                        <li><a href="/">Home</a></li>
                        </ul>
                       
                    <div class="buy-menu-btn d-none">
                        <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>
        </header>


            {/* <section class="bg-half-170 border-bottom agency-wrapper" id="home">
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-7 col-md-7 order-1 order-md-2">
                                <div class="title-heading mt-4 ml-lg-5">
                                    <h1 class="heading mb-3">We are Startup Creative <span class="text-primary">HackerBrews!!</span> Agency</h1>
                                    <p class="para-desc text-muted">CodeShastra hackathon.</p>
                                    <div class="watch-video mt-4 pt-2">
                                      
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5 col-md-5 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <img src="images\illustrator\working_with_computer.svg" class="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       
      
       
     
      
      
    
        <section class="section bg-light">
            <div class="container">
                

                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div id="customer-testi" class="owl-carousel owl-theme">
                            <div class="media customer-testi m-2">
                                <img src="images\client\01.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</p>
                                    <h6 class="text-primary">- Thomas Israel <small class="text-muted">C.E.O</small></h6>
                                </div>
                            </div>
                            
                            <div class="media customer-testi m-2">
                                <img src="images\client\02.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star-half text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "</p>
                                    <h6 class="text-primary">- Barbara McIntosh <small class="text-muted">M.D</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\03.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                    <h6 class="text-primary">- Carl Oliver <small class="text-muted">P.A</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\04.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "</p>
                                    <h6 class="text-primary">- Christa Smith <small class="text-muted">Manager</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\05.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" There is now an abundance of readable dummy texts. These are usually used when a text is required. "</p>
                                    <h6 class="text-primary">- Dean Tolle <small class="text-muted">Developer</small></h6>
                                </div>
                            </div>

                            <div class="media customer-testi m-2">
                                <img src="images\client\06.jpg" class="avatar avatar-small mr-3 rounded shadow" alt=""/>
                                <div class="media-body content p-3 shadow rounded bg-white position-relative">
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <p class="text-muted mt-2">" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "</p>
                                    <h6 class="text-primary">- Jill Webb <small class="text-muted">Designer</small></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                

                <div class="row">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\blog\01.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                                <h4><a href="/UserSignIn" class="title text-dark">User Sign In</a></h4>
                                <div class="post-meta mt-3">
                                    <a href="javascript:void(0)" class="text-muted float-right readmore">Read More <i class="mdi mdi-chevron-right"></i></a>
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="author">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i>This tab is for Users to LogIn </small>
                             
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\blog\02.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                                <h4><a href="javascript:void(0)" class="title text-dark">NGO Sign In</a></h4>
                                <div class="post-meta mt-3">
                                    <a href="javascript:void(0)" class="text-muted float-right readmore">Read More <i class="mdi mdi-chevron-right"></i></a>
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="author">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i>This tab is for NGO Representatives to LogIn</small>
                               
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="blog position-relative overflow-hidden shadow rounded">
                            <div class="position-relative">
                                <img src="images\blog\03.jpg" class="img-fluid rounded-top" alt=""/>
                                <div class="overlay rounded-top bg-dark"></div>
                            </div>
                            <div class="content p-4">
                                <h4><a href="javascript:void(0)" class="title text-dark">Donor Sign In</a></h4>
                                <div class="post-meta mt-3">
                                    <a href="javascript:void(0)" class="text-muted float-right readmore">Read More <i class="mdi mdi-chevron-right"></i></a>
                                    <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item mr-2"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="author">
                                <small class="text-light user d-block"><i class="mdi mdi-account"></i> This tab is for Donors to LogIn</small>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* images/single/bg01.jpg */}
     {/* <Footer/> */}
    
     <section class="bg-home" style={{backgroundImage: `url(images/single/bg01.jpg )`}} id="home">
            <div class="home-center">
                <div class="home-desc-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-9 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                <div class="title-heading margin-top-100">
                                    <h1 class="display-4 font-weight-bold mb-3">Pator</h1>
                                    <p class="para-desc mx-auto text-muted">Use Our Website and reduce physical distance between a doctor and patient </p>
                                </div>

                                <div class="home-dashboard">
                                    <img src="images\single\340-3403351_chatbots-builder-pricing-crozdesk-robot-icon-png-white.png" style={{height:"300px",width:'300px',opacity:'0.7',paddingTop:'30px'}} alt="" class="img-fluid mover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
    {/* <PieChart/> */}
        <section class="section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-6 p-4 text-center">
                        <img src="images\icon\camera.svg" height="45" alt=""/>
                        <h5 class="mt-2">Friendly</h5>
                        <p class="text-muted mb-0">Make A New Friend That Helps You Out</p>
                    </div>
                    
                    <div class="col-md-3 col-6 p-4 text-center">
                        <img src="images\icon\speedometer.svg" height="45" alt=""/>
                        <h5 class="mt-2">Speed</h5>
                        <p class="text-muted mb-0">Response in 0.2 seconds</p>
                    </div>
                    
                    <div class="col-md-3 col-6 p-4 text-center">
                        <img src="images\icon\low-battery.svg" height="45" alt=""/>
                        <h5 class="mt-2">Insights</h5>
                        <p class="text-muted mb-0">Google Page Insight</p>
                    </div>
                    
                    <div class="col-md-3 col-6 p-4 text-center">
                        <img src="images\icon\game.svg" height="45" alt=""/>
                        <h5 class="mt-2">Algo</h5>
                        <p class="text-muted mb-0">Rule Based Directional Bot</p>
                    </div>
                </div>
            </div>
            
            
        </section>

        {/* <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <img src="images\single\drone.gif" class="img-fluid" alt=""/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h4 class="title mb-4">Awesome Features</h4>
                            <p class="text-muted para-desc mx-auto mb-0">Start working with <span class="text-primary font-weight-bold">Code Black</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-camera-outline text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">48mp Camera</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-wifi text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Faster Connection</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-cryengine text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Easy to Operate</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-video-outline text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Stable Video</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-antenna text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Powerful Antenna</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-battery-10 text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Battery Backup</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-memory text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Advance Technology</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-fan text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Easy Disassembly</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mt-4 pt-2">
                        <div class="key-feature d-flex p-3 bg-white rounded shadow">
                            <div class="icon text-center rounded-pill mr-3">
                                <i class="mdi mdi-android-studio text-primary"></i>
                            </div>
                            <div class="content mt-2">
                                <h4 class="title mb-0">Rebust Structure</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>\\

            <div class="container mt-100 mt-60">
                <div class="row justify-content-center">
                    <div class="col-md-7">
                        <div class="position-relative">
                            <img src="images\single\bg02.jpg" class="rounded img-fluid mx-auto d-block" alt=""/>
                            <div class="play-icon">
                                <a href="http://vimeo.com/287684225" class="play-btn shadow video-play-icon">
                                    <i class="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        <footer class="footer" style={{height:'300px'}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                        <a class="logo-footer" href="#">Pator<span class="text-primary">.</span></a>
                        <p class="mt-4">Start working with Pator that can provide everything you need to generate awareness, drive traffic, learn.</p>
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-twitter" title="Twitter"></i></a></li>
                        </ul>
                    </div>
                    
           
                    <div class="col-lg-6 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-light footer-head">Newsletter</h4>
                        <p class="mt-4">Sign up and receive the latest tips via email.</p>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="foot-subscribe form-group position-relative">
                                        <label>Write your email <span class="text-danger">*</span></label>
                                        <i class="mdi mdi-email ml-3 icons"></i>
                                        <input type="email" name="email" id="emailsubscribe" class="form-control pl-5 rounded" placeholder="Your email : " required=""/>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <button class="btn btn-primary rounded w-100" value="Subscribe">Get Information</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    
            </div>
        )
    }
}

export default Dashboard