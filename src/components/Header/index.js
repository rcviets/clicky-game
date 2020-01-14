import React from 'react';
import Score from '';

const Header = (props) => {
    return (
        <div>
            <nav class="navbar navbar-light bg-warning">
                <a class="navbar-brand" href="#">Clicky Game</a>
            </nav>
            <span class="navbar-text">
                <p>Score: {props.score} || Top Score: {props.topScore}</p>
            </span>
        </div>
    );
}

export default Header;