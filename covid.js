import React, { Component } from 'react';
import Nav from "./nav";

class covid extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Covid Tracker</h1>
            <div>
              <p classname="test">Covid Tracker </p>
              <div><a className="contact" href="#">Click to View</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default covid;
