import React from "react";
import Deck from "../../game/Deck/Deck";

interface PlayerProps {
    playerNumber: number;
    deck: Deck;
}

const Player: React.FC<PlayerProps> = ({playerNumber, deck}) => {
    return (
        <div className="player">
            <div className="player-number">Player {playerNumber}</div>
            <div className="deck">{deck.size()}</div>
        </div>
    )
};

export default Player;