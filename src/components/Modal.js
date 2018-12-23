import React from 'react';
import Blockchain from 'svg-react-loader?name=Blockchain!../images/blockchain.svg';

export default function Modal(props) {
    return <div className="bg-modal"> 
        <div className="modal-content">
            <Blockchain />

            <form>
                <input type="text" placeholder="Ticker symbol"></input>
                <input type="number" placeholder="Amount"></input>
            </form>
        </div>
    </div>
}
