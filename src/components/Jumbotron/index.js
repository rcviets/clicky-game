import React from 'react';

const Jumbotron = (props) => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid bg-danger">
                <div className="container">
                    <h1 className="display-4 text-center">Click Each Picture For A Point</h1>
                    <p className="lead text-center">{props.headerText}</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;