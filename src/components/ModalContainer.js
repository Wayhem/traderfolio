import './Modal.css';
import { Container } from 'unstated';

class ModalContainer extends Container {

    state = {
        ticker: '',
        amount: ''
    }

    getInput = (e) => {
        e.preventDefault();
        console.log(this.state.ticker);
        console.log(this.state.amount);
    }

    cleanState = () => {
        this.setState({ticker: '', amount: ''})
    }

    // render() {
    //     return <div className="bg-modal hidden"> 
    //         <div className="modal-content">
    //             <div className="close" onClick={this.props.handleModal}>+</div>
    //             <Blockchain />
    //             <form className="modal-form" onSubmit={this.getInput}>
    //                 <input 
    //                     id="input" 
    //                     className="modal-input Input-text" 
    //                     type="text" 
    //                     placeholder="BTC, ETH, or.." 
    //                     value={this.state.ticker}
    //                     onChange={e => this.setState({ ticker: e.target.value })}
    //                 />
    //                 <label htmlFor="input" className="Input-label">Ticker</label>
    //                 <input 
    //                     id="input2" 
    //                     className="modal-input Input-text" 
    //                     type="text" 
    //                     placeholder="Amount" 
    //                     value={this.state.amount}
    //                     onChange={e => this.setState({ amount: e.target.value })}
    //                 />
    //                 <label htmlFor="input2" className="Input-label2">Amount</label>
    //                 <button id="addButton" className="btn btn-primary badge-pill">Submit</button>
    //             </form>
    //         </div>
    //     </div>
    // }
}

export default ModalContainer;