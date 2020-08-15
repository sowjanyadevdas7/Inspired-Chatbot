import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Inspired Chatbot</h1>
            <div>
              <p className="test">Talk to Inspired chatbot and experience the human touch of a robot, Share your emotions with smash the councelling expert. </p>
              <div><a className="contact" href="#">Contact Us</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
