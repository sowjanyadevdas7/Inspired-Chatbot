import React from "react";
import ReactPlayer from "react-player";
import Iframe from "react-iframe" ;
import Nav from '../components/nav'; 
import logo from '../images/Aryan.jpg';
import img2 from '../images/soujanya.jpeg';
import img3 from '../images/Melvin.jpg';
import img4 from '../images/Srikanth.jpeg';
const videos = () => {
  return (
    
    <header1>
    <Nav/>
    <div className="wrapper">
    <h1>---------------------------</h1>
    <h2>We are the Team of Inspired</h2>
    <div className="team">
    <div className="team_member">
      <div className="team_img">
      </div>
      <img src={img2} />
      <h3>Soujanya D.G</h3>
      <p className="role">Data Analytics</p>
      <p>I'm Sowjanya from udupi the coastal city of Karnataka. I'm a computer science engineer specialized in data analytics and I love to entertain people with my singing skills</p>
    </div>
    <div className="team_member">
      <div className="team_img">
      </div>
      <img src={logo} />
      <h3>Aryan D.M</h3>
      <p className="role">React Developer</p>
      <p>Myself Aryan from Murdeshwar the  coastal city of Karnataka I am an Computer Science Engineer specialized in Web designing My passion is to become a Politician and a Perfect Writer.</p></div>
    <div className="team_member">
      <div className="team_img">
      </div>
      <img src={img3} />
      <h3>Melvin Derrick</h3>
      <p className="role">React Developer</p>
      <p>I am Mevin from Bangalore. I am a passionate developer who is interested in solving real life problems and deriving innovative solutions. I am also passionate in gardening and art. </p>
    </div>
    <div className="team_member">
      <div className="team_img">
      </div>
      <img src={img4} />
      <h3>Srikanth S</h3>
      <p className="role">Machine Learning</p>
      <p>Myself Shrikanth from Ulsoor the central part of Bangalore KarnatakaI am an Computer Science Engineer specialized in Data Analytics My passion is to become a Motivation Speaker and to serve for Humanity!</p>
    </div>
  </div>
  
</div>
</header1>

  )}

 
export default videos;
