import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Sidebar from "./components/Sidebar"
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="wrapper">
        <Sidebar />
      </div>
    );
  }
}

export default hot(module)(App);