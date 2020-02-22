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
// import Header from './UpAndDown/Header'
// import Footer from './UpAndDown/Footer'
import UserSignIn from './UserSignIn'
import AddProfile from './Components/AddProfile'
import NgoSignIn from './NGO/NgoSignIn'
// import Quiz from './Components/Quiz';
import LandingPage from './Components/Landing'
import  Bot from './Components/Bot'
import Quizbee from './Quiz/index'
import ResultDisplay from './Components/ResultDisplay'
import SciencePost from './Blog/SciencePost'
import BlogPage from './Blog/BlogPage'
import CommercePost from './Blog/CommercePost'
import ArtsPost from './Blog/ArtsPost'




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
                  <Route exact path="/ResultDisplay">
                <ResultDisplay/>
                  </Route>
                  <Route exact path="/Login">
                    <New />
                  </Route>
                  <Route exact path="/SignIn">
                    <UserSignIn/>
                  </Route>
                  <Route exact path="/AddProfile">
                    <AddProfile/>
                  </Route>
                  {/* <Route exact path="/NgoSignIn">
                    <NgoSignIn/>
                  </Route> */}
                </Switch>
                {/* <Route exact path="/Quiz">
                    <Quiz/>
                  </Route> */}
                  {/* <Route exact path="/LandingPage">
                    <LandingPage/>
                  </Route> */}
                  <Route exact path="/Bot">
                    <Bot/>
                  </Route>
                  <Route exact path="/Quiz">
                    <Quizbee/>
                  </Route>
                  <Route exact path="/BlogPage">
                   <BlogPage/>
                  </Route>
                  <Route exact path="/sciencePost">
                  <SciencePost/>
                  </Route>
                  <Route exact path="/commercePost">
                    <CommercePost/>
                  </Route>
                  <Route exact path="/artsPost">
                   <ArtsPost/>
                  </Route>
              </div>
             
            </Router>
        
        
                           
                                {/* <New/> */}
            </div>
          );
    }
  
}

export default App;
