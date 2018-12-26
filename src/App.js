import React, { Component, Fragment } from "react";
import {hot} from "react-hot-loader";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ModalContainer from "./components/containers/ModalContainer";
import { Provider, Subscribe } from 'unstated';
import Blockchain from 'svg-react-loader?name=Blockchain!./images/blockchain.svg';
import "./App.css";


class App extends Component{
  handleModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    document.querySelector('.bg-modal').classList.toggle('hidden');
    document.querySelector('.bg-modal').classList.toggle('visible');
    let inputs = Array.from(document.querySelectorAll('.modal-input'));
    inputs.forEach(el => el.value = '');
  }

  state = {
    balance : new Map(),
    allTickers: []
  }

  getInput = (modal, e) => {
    e.preventDefault();
    const inputs = modal.getInput(e);
    if (!isNaN(inputs.amount)) {
      this.setInputs(inputs);
      this.handleModal();
    }
  }

  setInputs = (inputs) => {
    const balance = this.state.balance;
    if(balance.get(inputs.ticker)) {
      inputs.amount += balance.get(inputs.ticker)
    }
    balance.set(inputs.ticker, inputs.amount);
    this.setState({ balance });
  }

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/all/coinlist?api_key=89478ca7a91f171127019e9765351a5210193275be44cfda15279a290f9e128f')
      .then(res => res.json())
      .then(data => {
        this.state.allTickers = Object.keys(data.Data);
        console.log('ready');
      });
  }

  render(){
    return(
      <div className="wrapper">
        <Sidebar handleModal={this.handleModal} />
        <Content balance={this.state.balance} />
        <Provider>
          <Subscribe to={[ModalContainer]}>
            {modal => (
              <div className="bg-modal hidden"> 
                <div className="modal-content">
                  <div className="close" onClick={(e) => {this.handleModal(e); modal.cleanState();}}>+</div>
                  <Blockchain />
                  <form autoComplete="off" className="modal-form" onSubmit={(e) => this.getInput(modal, e)}>
                      <input 
                          autoComplete="off"
                          id="input" 
                          className="modal-input Input-text" 
                          type="text" 
                          placeholder="BTC, ETH, or.." 
                          value={modal.state.ticker}
                          onChange={e => modal.onChange(e, this.state.allTickers)}
                          onKeyDown={e => modal.onKeyDown(e)}
                      />
                      <label htmlFor="input" className="Input-label">Ticker</label>
                      {modal.renderSuggestions()}
                      <input 
                          autoComplete="off"
                          id="input2" 
                          className="modal-input Input-text" 
                          type="text"
                          min="0"
                          step="0.01" 
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