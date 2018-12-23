import React, { Component } from 'react';
import Blockchain from 'svg-react-loader?name=Blockchain!../images/blockchain.svg';
import './Modal.css';

class Modal extends Component {

    closeModal = () => {
        document.querySelector('.bg-modal').style.display = 'none';
        let inputs = Array.from(document.querySelectorAll('.modal-input'));
        inputs.forEach(el => el.value = '');
    }

    render() {
        return <div className="bg-modal"> 
            <div className="modal-content">
                <div className="close" onClick={this.closeModal}>+</div>
                <Blockchain />
                <form className="modal-form">
                    <input id="input" className="modal-input Input-text" type="text" placeholder="BTC, ETH, or.."></input>
                    <label htmlFor="input" className="Input-label">Ticker</label>
                    <input id="input2" className="modal-input Input-text" type="text" placeholder="Amount"></input>
                    <label htmlFor="input2" className="Input-label2">Amount</label>
                    <a href="#" id="addButton" className="btn btn-primary badge-pill">Submit</a>
                </form>
            </div>
        </div>
    }
}

export default Modal;