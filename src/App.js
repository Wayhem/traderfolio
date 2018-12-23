import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Modal from "./components/Modal";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="wrapper">
        <Sidebar />
        <Content />
        <Modal />
      </div>
    );
  }
}

export default hot(module)(App);