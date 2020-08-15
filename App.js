import React, { Component } from 'react';
import { BrowserRouter as BrowserRoute,Route, Switch, Link, Redirect} from "react-router-dom";
import MainPage from "./pages";
import Welcome from "./components/Welcome";
import corona from "./pages/corona";
import Aboutus from "./pages/Aboutus";
import Videos from "./pages/Videos";
import NotFoundPage from "./pages/404";
class App extends Component {
  render() {
    return (

      <BrowserRoute>
      <Switch>
      <Route exact path = "/" component = {Welcome}/>
      <Route exact path = "/Home" component = {Welcome}/>
      <Route exact path = "/corona" component = {corona}/>
      <Route exact path = "/Videos" component = {Videos}/>
      <Route exact path = "/Aboutus" component = {Aboutus}/>
      <Route exact path = "/404" component = {NotFoundPage}/>
      <Redirect to="/404"/> 
      </Switch>
      </BrowserRoute>

     ) }
}

export default App;
