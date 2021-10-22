import React, { useEffect, useState } from "react";
import Deck from "../../game/Deck/Deck";
import Card from "../Card/Card";

const Game: React.FC = () => {
    const [p1Deck, setP1Deck] = useState<Deck>();
    const [p2Deck, setP2Deck] = useState<Deck>();

    useEffect(() => {
        const fullDeck = new Deck();
        fullDeck.shuffle();

        const [d1, d2] = fullDeck.split();
        setP1Deck(d1);
        setP2Deck(d2);
    }, []);

    if (p1Deck && p2Deck) {
        return (
            <div className="game">
                <Card suit={p1Deck.getCards()[0].suit} rank={p1Deck.getCards()[0].rank}/>
                <Card suit={p2Deck.getCards()[0].suit} rank={p2Deck.getCards()[0].rank}/>
            </div>
        )
    } else {
        return null;
    }

};

export default Game;