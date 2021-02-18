import React, { PureComponent, Component } from 'react';
import "./assets/style.css";
import ReactDOM from 'react-dom'
import quizService from './quizService'
import QuestionBox from './components/QuestionBox';
import Quizbee from './index1'
import {Button} from './quizService/Button'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'

class Quizbee1 extends Component{
    state={
        questionBank:false,
       
    };


    physics=()=>{
        this.setState({
            questionBank:true
        });
       
    }


    render(){     
    return(
        
        <Home/>
       
    );
}
}

export default Quizbee