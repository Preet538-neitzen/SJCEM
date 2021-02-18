import React,{Component} from 'react';
import './App.css';
import New from './New'
import Dashboard from './Components/Dashboard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UserSignIn from './UserSignIn'
import SimpleMap from './AutoComplete'
import Disease from './DiseaseApiSearch/DiseaseAndDetails'
import DoctorDash from './Doctor/DoctorDash'
import SearchOurDatabase from './Components/SearchOurDatabase/SearchOurDatabase'
import ShowPost from './Components/ShowPost';
import BlogPage from './Components/BlogPage'
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import Pending from './Components/Pending';
import SearchResult from './Components/SearchResult';
import Undiagnosed from './Components/Undiagnosed';
import UndiagDash from './Components/UndiagDash';
import ViewProb from './Components/ViewProb';
import DoctorHeader from './Components/Header'
class App extends Component{


    
  



    render(){
        return (
            <div className="App">
        
      
            <Router>
              <div>
              
                <Switch>
                <Route exact path="/">
                <Dashboard/>
                  </Route>
                  <Route exact path="/DoctorDash">
                  <DoctorHeader/>
                <DoctorDash/>
                  </Route>
                  <Route exact path="/Disease">
                 
                <Disease/>
                  </Route>
                  <Route exact path="/SearchOurDatabase">
                 
                <SearchOurDatabase/>
                  </Route>
                  <Route exact path="/Login">
                    <New />
                  </Route>
                  <Route exact path="/SignIn">
                    <UserSignIn/>
                  </Route>
                  <Route exact path="/SimpleMap">
                  <DoctorHeader/>
                    <SimpleMap/>
                  </Route>
                  <Route exact path="/viewProblem" component={ViewProb}/>
                  <Route exact path="/postProblem" component={Undiagnosed}/>
                  
                  <Route exact path="/BlogPage" component={BlogPage}/>

                  <Route exact path="/pending" component={Pending}/>
                  <Route exact path="/createPost" component={CreatePost}/>
                  <Route exact path="/solution/:result_term" component={UndiagDash}/>
                  <Route exact path="/result/:search_term" component={SearchResult}/>
                  <Route exact path='/:post_id' component={Post} />
                
                  <Route eaxct path="/show/:key_id" component={ShowPost}/>
                </Switch>
              
                 
              </div>
             
            </Router>
        
        
                           
                               
            </div>
          );
    }
  
}

export default App;
