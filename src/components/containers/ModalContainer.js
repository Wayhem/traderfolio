import './Modal.css';
import { Container } from 'unstated';
import Swal from 'sweetalert2';

class ModalContainer extends Container {

    state = {
        ticker: '',
        amount: ''
    }

    format(ticker, amount) {
        ticker = ticker.toUpperCase();
        amount = parseFloat(amount);
        console.log(amount);
        if (isNaN(amount)) {
            Swal({
                type: 'error',
                title: 'Oops...',
                text: 'Insert valid number!'
            })
        }
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