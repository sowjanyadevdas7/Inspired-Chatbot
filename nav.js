import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Inspired Chatbot</li>
          </ul>
          <ul>
              <li><a href="/Home">Home</a></li>
              <li><Link to="/corona">Covid-19</Link></li>
              <li><a href="/Videos">Videos</a></li>
              <li><a href="/Aboutus">About Us</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
