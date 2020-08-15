import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>About Us</h2>
            <div>
             <p>We as Team Smash want to impact everyone who visits our website. We want to do the least desired job of all to listen to your problems have empathy with the situations you go through.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="fa fa-share-alt"></i></p>
                <p className="service-title">Sharing</p>
                <p>Share your problems with Smash everything remains a secret the data you share is not stored so no worries.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="fa fa-heart"></i></p>
                <p className="service-title">Loving</p>
                <p>We as the team of Smash just desire one thing to spread love because everyone deserves it.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="fa fa-globe"></i></p>
                <p className="service-title">Caring</p>
                <p>We know that everyone goes through problems. We care and empathise with what you go through.</p>
              
          </div>
        </div>

            </div>


        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>

        <section>
            <h2>Our Mission</h2>
            <div>
              <p>To make the world a better place where people are felt important and valued for what they are.</p>
              <p>We dont Jurdge we just empathise and share love which is in abundance.</p>
              </div>
        </section>


        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
