import React from 'react';

//Using an arrow function here kept causing a compiling error for some reason
function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-warning">
                <a className="navbar-brand" href="https://rcviets.github.io/clicky-game/">The Next Generation Clicky Game</a>
                <span className="navbar-text">
                    <p>Score: {props.score} || Top Score: {props.topScore}</p>
                </span>
            </nav>
        </div>
    );
}

export default Header;