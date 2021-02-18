import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import fire from './Config/Config'
import firebase from 'firebase/app'
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import axios from 'axios'
 
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.

 


const AnyReactComponent = ({ text }) => <div>{text}</div>;
 

Geocode.setApiKey("AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo");
// set response language. Defaults to english.
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
var db = firebase.firestore();
   
var docRef = db.collection("nayamapper").doc('BorWest');
    
          docRef.get().then(function(doc) {
              if (doc.exists) {
                
              
                  console.log("Document data (Lat obtained is---):", doc.data());
                  const useable = doc.data
                  // Get address from latidude & longitude.
Geocode.fromLatLng(useable, "2.2922926").then(
    response => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    error => {
      console.error(error);
    }
  );
              } 
          }).catch(function(error) {
              console.log("Error getting document:", error);
          });



 
// Get latidude & longitude from address.
Geocode.fromAddress("Dubai").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    localStorage.setItem('lat', lat)
    console.log(lat, lng);
    var db = firebase.firestore();
   

                        db.collection("nayamapper").doc('BorWest').set({
                        name: localStorage.getItem('lat'),
                        }).then(function() {
                        console.log("Data Ojbect for new address created");
                        });
    
  },
  error => {
    console.error(error);
  }
);


class SimpleMap extends Component {

    
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  
  constructor(props){
    super(props);
    this.state = {
        lat:0 ,
        lng:0.0,
        acctype:'',
        subcategory:'',
        posts:[],
        mapId:'',
        bool:true
    }
    this.handleChangeAcc = this.handleChangeAcc.bind(this)
    this.handleChangeSubcategory =this.handleChangeSubcategory.bind(this)
    this.submit = this.submit.bind(this)
  }

    handleChangeAcc(e){
        this.setState({
            acctype:e.target.value
        })
    }

  handleChangeSubcategory(e){
    this.setState({
        subcategory: e.target.value
    })
  }

  componentWillMount() {
 
    
  }
 
 
  submit=(e)=>{
      let self = this
    e.preventDefault();
    var docRef = db.collection("LatLng").doc("Locations");
    const datavar = this.state.acctype
    console.log(this.state.acctype)
        docRef.get().then(function(doc) {
            if (doc.exists) {
                self.setState({lat:doc.data().lat})
                console.log("Document data:", doc.data().lat);
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const url ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+doc.data().lat+','+doc.data().lng+"&radius=2500&type="+self.state.acctype+"&keyword=" +self.state.subcategory + "&key=AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo"; 
                fetch(proxyurl + url) 
                .then(response => response.json())
                .then(contents=>self.setState({
                                posts:[...contents.results]
                }).then(contents=>
                    contents=> console.log(contents.results)
   )
                
                .then(contents=>self.setState({

                    mapId:contents.results[0].id
                })
                
                ).then(contents=>console.log(contents.results[0].id)
                )
               
                
                )
                
                .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
                  
            } else {
                console.log("No such document!");

            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        console.log(this.state.lat)

  }
 
  render()
   {
    return (
 <>
      <div style={{ height: '44vh', width: '75%' }}>
      
     
<div class="container">
<div class="back-to-home rounded d-none d-sm-block">
                <a href="/SignIn" class="text-white rounded d-inline-block text-center"><i class="mdi mdi-home"></i></a>
            </div>
        <div style={{marginLeft:300,marginTop:150}}>
                                <div class="component-wrapper rounded shadow">
                                  
        
                                    <div class="p-4">
                                        <form>
                                        <GoogleSuggest/>
                                            <div class="row">
                                            <div  class="col-md-6">
                                                <div class="form-group" onChange={this.handleChangeAcc}>
                                                    <select class="form-control" id="accType" name="accType">
                                                        <option value="" selected disabled hidden>Account Type</option>
                                                        <option value="Doctor">Doctor</option>
                                                        <option value="Hospital">Hospital</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group position-relative">
                                                        <label>Sub-Category <span class="text-danger">*</span></label>
                                                        <i class="mdi mdi-email ml-3 icons"></i>
                                                        <input name="subcategory" id="subcategory" type="subcategory" class="form-control pl-5" value={this.state.subcategory} onChange={this.handleChangeSubcategory} placeholder="Eg: Pharmicist: / Name of doctor / Anything related"/>
                                                    </div> 
                                                </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12 text-center">
                                                    <button onClick={this.submit} class="btn btn-primary" value="Send Message">Click for details</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
            {/* table end */}
      </div>
      <section class="section" style={{marginTop:350}}>
            
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-12">
                        <div class="table-responsive crypto-table bg-white shadow rounded">
                            <table class="table mb-0 table-center">
                                <thead>
                                    <tr>
                                        
                                        <th scope="col">Name</th>
                                        <th scope="col"style={{maxWidth:200}}>Doctor Id</th>
                                        <th scope="col"style={{maxWidth:200}}>Opening Hours</th>
                                        <th scope="col"style={{maxWidth:200}}>Address</th>
                                         <th scope="col"style={{maxWidth:200}}>ratings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.mapId}
                                    {
                                        this.state.bool?<>
                                        {
                                            this.state.posts.map(temp => {
                                                console.log("Value is", temp)
                                                return(
                                                    <>
                                                   
                                                    <tr>
                                       
                                        <th>
                                        
                                           
                                            <p class="mt-2 mb-0 font-weight-normal h5">{temp.name} </p>
                                        </th>
                                        <td>{temp.id}</td>
                                        <td class="text-success">9 am - 5 pm</td>
                                        <td><a href="" class="primary"></a>{temp.vicinity}</td>
                                        <td class="text-success">{temp.rating}</td>
                                        <td class="text-success"></td>
                                    </tr>
                                    </>
                                    
                                                )
                                            })
                                        }
                                        </>:<>
                                        </>
                                    }
                                    
                                    
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </>
    );
  }
}
 
export default SimpleMap;


 
const MY_API_KEY = "AIzaSyCT-jRtPJqNbV9NhKzHhoHSpWe6SVv3rMo" 
 
  class GoogleSuggest extends React.Component {
    state = {
        search: "",
        value: "",
    }
 
    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value})
    }
 
    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction) // eslint-disable-line
        this.setState({
            search: "",
            value: geocodedPrediction.formatted_address,
        })
        console.log(geocodedPrediction.geometry.viewport.Za['i'] )
        var db = firebase.firestore()
                        db.collection("LatLng").doc("Locations").set({
               lat:geocodedPrediction.geometry.viewport.Za['i'],
               lng:geocodedPrediction.geometry.viewport.Ua['i'],

                }).then(function() {
                  console.log("Data Ojbect for new User created");
                });
    }
 
    handleNoResult = () => {
        console.log("No results for ", this.state.search)
    }
 
    handleStatusUpdate = status => {
        console.log(status)
    }
 
    render() {
        const {search, value} = this.state
        return (
            <ReactGoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <ReactGooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                // Optional options
                                // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
                            }}
                            // Optional props
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="My custom no results text" // null or "" if you want to disable the no results item
                            customRender={prediction => (
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "My custom no results text"}
                                </div>
                            )}
                        >
                            <input
                                type="text"
                                name="subcategory" id="subcategory" type="subcategory" class="form-control pl-5"
                                style={{marginBottom:30}}
                                value={value}
                                placeholder="Enter location to be evaluated"
                                onChange={this.handleInputChange}
                            />
                        </ReactGooglePlacesSuggest>
                    )
                }
            />
        )
    }
}
