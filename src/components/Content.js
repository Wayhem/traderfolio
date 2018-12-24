import React, { Component } from "react";

class Content extends Component{

    componentDidMount() {
        document.querySelector('#sidebarCollapse').addEventListener('click', () => {
            document.querySelector('#sidebar').classList.toggle('active');
        });
    }

    render(){
        return(
            <div id="content" className="ml-3">
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
                <h1 className="text-simple">$30000</h1>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title text-simple">Ethereum</h5>
                    </div>
                </div>
            </div>
        </div>    
        );
  }
}

export default Content;