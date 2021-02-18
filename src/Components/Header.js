import React, { Component } from 'react'
import fire from '../Config/Config'
export class DoctorHeader extends Component {
    logout(){
        fire.auth().signOut();
        
      }
    render() {
        return (
            <div>
                <header style={{marginBottom:100}} id="topnav" class="defaultscroll sticky">
            <div class="container">
                   <div>
                    <a class="logo" href="/SignIn"></a>
                </div>                 
                
           
                <div class="menu-extras">
                  
                </div>
        
                <div id="navigation">
                 
                    <ul class="navigation-menu">
                        <li><a href="/SignIn">Pator</a></li>
                        <li class="has-submenu">
                            <a href="/SignIn">Home</a>
                            
                        </li>
        
                        
                    </ul>
                  
                </div>
            </div>
        </header>
            </div>
        )
    }
}

export default DoctorHeader
