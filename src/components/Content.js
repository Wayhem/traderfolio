import React, { Component } from "react";
import Card from './Card';

class Content extends Component{

    componentDidMount() {
        document.querySelector('#sidebarCollapse').addEventListener('click', () => {
            document.querySelector('#sidebar').classList.toggle('active');
        });
    }

    componentDidUpdate() {
        this.render();
    }

    renderCards = () => {
        let items = [];
        this.props.balance.forEach((value, key) => {
            items.push(<Card key={key} ticker={this.props.api[key].FullName} value={value} imgUrl={this.props.api[key].ImageUrl} />);
        })
        return items;
    }

    render(){
        return(
            <div id="content" className="ml-3 container">
            <nav className="navbar navbar-expand-lg navbar-light pt-4">
                <div className="container-fluid">
        
                    <button type="button" id="sidebarCollapse" className="btn btn-dark">
                        <i className="fas fa-align-left"></i>
                        <span></span>
                    </button>
                </div>
            
            </nav>
            <div className="container-fluid pt-2">
                <h5 className="balance-text">Balance</h5>
                <h1 id="balance" className="text-simple">$0</h1>
                {this.renderCards()}
            </div>
            <button onClick={e => this.props.handleModal(e, 1)} id="navAdd" className="btn btn-outline-success badge-pill navBtn">Add Funds</button>
            <button onClick={e => this.props.handleModal(e, 2)} id="navRem" className="btn btn-outline-danger badge-pill navBtn">Remove Funds</button>
            <button onClick={e => this.props.handleModal(e, 3)} id="navEdit" className="btn btn-outline-warning badge-pill navBtn">Edit</button>
        </div>    
        );
  }
}

export default Content;