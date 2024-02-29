import React, { useState } from 'react';
import '../../src/App.css'

const PlayerCard = ({ player }) => {
    const [showStats, setShowStats] = useState(false)

    const toggleStats = () => {
        setShowStats(!showStats);
    };

    return (
        <div className={`card ${showStats ? 'flipped' : ''}`} onClick={toggleStats}>
            <div className="front">
                <img src={player.img} alt={player.name} />
                <h2>{player.name}</h2>
            </div>
            <div className="back">
                <h3>Statistics:</h3>
                <ul>
                    {player.statistics.map((stat, index) => (
                        <li key={index}>{stat}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PlayerCard;
