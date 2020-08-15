import React from "react";
import ReactPlayer from "react-player";
import Iframe from "react-iframe" ;
import Nav from '../components/nav';
import Footer from '../components/footer';
const videos = () => {
  return (
    <header1>
    <Nav/>
    <div>
    <div>
    <Iframe url="https://www.youtube.com/embed/xzNMABRELPg"
        width="1365px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>
    </div>
    <div>
    <Iframe url="https://www.youtube.com/embed/Jgi2c-4p-E4"
        width="1365px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>
    </div>
    <div>
    <Iframe url="https://www.youtube.com/embed/a1Y1ocyudjs"
        width="1365px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>
    </div>
    <div>
    <Iframe url=  "https://www.youtube.com/embed/FqprqUd56_g"
        width="1365px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>
    </div>
    <div>
    <Iframe url="https://www.youtube.com/embed/NqiKdkhqRIE"
        width="1365px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
   </div>
   <div>
    <Iframe url="https://www.youtube.com/embed/3p4MeH2gCvw"
        width="1365px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
    </div>
    <div>
    <Iframe url="https://www.youtube.com/embed/Vw1_AEaoXtM"
        width="1365px"
        height="650px"
        id="myId"
        className="myClassname"
        display="initial"
        position="center"/>
    </div>
</div>
<Footer/>
</header1>

  )}

 
export default videos;

