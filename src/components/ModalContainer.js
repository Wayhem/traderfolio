import './Modal.css';
import { Container } from 'unstated';

class ModalContainer extends Container {

    state = {
        ticker: '',
        amount: ''
    }

    format(ticker, amount) {
        ticker = ticker.toUpperCase();
        amount = parseFloat(amount);

        return { ticker, amount }
    }

    getInput = () => {
        const inputs = this.format(this.state.ticker, this.state.amount);
        return inputs;
    }

    cleanState = () => {
        this.setState({ticker: '', amount: ''})
    }
}

export default ModalContainer;