import React from 'react';

const Score = (props) => {
    return (
        <div>
            Score: { props.score } | TopScore: { props.topScore }
        </div>
    )
}

export default Score;