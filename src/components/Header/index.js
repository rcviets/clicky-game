import React from 'react';
import Score from 'score';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-warning">
                <a className="navbar-brand" href="#">Clicky Game</a>
                <span class="navbar-text">
                    <Score />
                </span>
            </nav>
        </div>
    );
}

export default Header;