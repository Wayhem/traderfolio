import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Modal from "./components/Modal";
import "./App.css";

class App extends Component{
  handleModal = (e) => {
    e.preventDefault();
    document.querySelector('.bg-modal').classList.toggle('hidden');
    document.querySelector('.bg-modal').classList.toggle('visible');
  }

  render(){
    return(
      <div className="wrapper">
        <Sidebar handleModal={this.handleModal} />
        <Content />
        <Modal handleModal={this.handleModal} />
      </div>
    );
  }
}

export default hot(module)(App);