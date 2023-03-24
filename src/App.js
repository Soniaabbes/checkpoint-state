import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ContactME from './ContactME';
import NavBar from './NavBar';
import MyName from './MyName';
import AboutMe from './AboutMe';


class App extends Component {
  constructor(){
    super ();
    this.state ={
    showHideDemo1: false,
    timer:0
    }
    this.hideComponent = this.hideComponent.bind(this);
  }
  
  hideComponent() {
    this.setState( { showHideDemo1:!this.state.showHideDemo1})};
   
    
  render() {
    const { showHideDemo1 } = this.state; 
    
    
    return (
      <div className='App'>
        <NavBar/>
        <MyName/>
        <AboutMe/>
        <div>

        
         <button onClick={() => this.hideComponent("showHideDemo1")}>
           contact me 
         </button>

      
       </div>

        {showHideDemo1 && <ContactME />}
        <br />
    
        

      </div>
    )
   } }


export default App

