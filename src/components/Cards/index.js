import React from 'react';
import "./style.css";

const Cards = (props) => {
    return (
        <div className="card">
            <div className="image-container">
                <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />
            </div>
        </div>
    )
}

export default Cards;