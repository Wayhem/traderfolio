import React from "react";

export default function Card(props) {
    return <div className="card mx-3" style={{width: '18rem', display: 'inline-block'}}>
        <div className="card-body">
            <h5 className="card-title text-simple">{props.ticker}</h5>
            <p className="card-text">{props.value}</p>
        </div>
    </div>
}