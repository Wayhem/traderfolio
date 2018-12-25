import React, { Component } from "react";
import {hot} from "react-hot-loader";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ModalContainer from "./components/ModalContainer";
import { Provider, Subscribe } from 'unstated';
import Blockchain from 'svg-react-loader?name=Blockchain!./images/blockchain.svg';
import "./App.css";


class App extends Component{
  handleModal = (e) => {
    e.preventDefault();
    document.querySelector('.bg-modal').classList.toggle('hidden');
    document.querySelector('.bg-modal').classList.toggle('visible');
    let inputs = Array.from(document.querySelectorAll('.modal-input'));
    inputs.forEach(el => el.value = '');
  }

  render(){
    return(
      <div className="wrapper">
        <Sidebar handleModal={this.handleModal} />
        <Content />
        <Provider>
          <Subscribe to={[ModalContainer]}>
            {modal => (
              <div className="bg-modal hidden"> 
                <div className="modal-content">
                  <div className="close" onClick={(e) => {this.handleModal(e); modal.cleanState();}}>+</div>
                  <Blockchain />
                  <form className="modal-form" onSubmit={modal.getInput}>
                      <input 
                          id="input" 
                          className="modal-input Input-text" 
                          type="text" 
                          placeholder="BTC, ETH, or.." 
                          value={modal.state.ticker}
                          onChange={e => modal.setState({ ticker: e.target.value })}
                      />
                      <label htmlFor="input" className="Input-label">Ticker</label>
                      <input 
                          id="input2" 
                          className="modal-input Input-text" 
                          type="text" 
                          placeholder="Amount" 
                          value={modal.state.amount}
                          onChange={e => modal.setState({ amount: e.target.value })}
                      />
                      <label htmlFor="input2" className="Input-label2">Amount</label>
                      <button id="addButton" className="btn btn-primary badge-pill">Submit</button>
                    </form>
                  </div>
                </div>
            )}
          </Subscribe>
        </Provider>
      </div>
    );
  }
}

export default hot(module)(App);