import React, { useEffect, useState } from "react";
import Deck, { CardInfo } from "../../game/Deck/Deck";
import Card from "../Card/Card";
import Player from "../Player/Player";

const Game: React.FC = () => {
    const [p1Deck, setP1Deck] = useState<Deck>();
    const [p1Played, setP1Played] = useState<CardInfo>();
    const [p2Deck, setP2Deck] = useState<Deck>();
    const [p2Played, setP2Played] = useState<CardInfo>();
    const [winner, setWinner] = useState<number>();

    useEffect(() => {
        const fullDeck = new Deck();
        fullDeck.shuffle();

        const [d1, d2] = fullDeck.split();
        setP1Deck(d1);
        setP2Deck(d2);
    }, []);

    const play = (): void => {
        if (!p1Deck || !p2Deck) throw new Error(); // TODO

        setP1Played(p1Deck.draw());
        setP2Played(p2Deck.draw());
    };

    const evaluate = (): void => {
        if (!p1Played || !p2Played || !p1Deck || !p2Deck) throw new Error(); // TODO

        if (p1Played.rank > p2Played.rank) { // Player 1 wins this round
            console.log("p1");
            p1Deck.pushBottom(p1Played, p2Played);
        } else if (p2Played.rank > p1Played.rank) { // Player 2 wins this round
            console.log("p2");
            p2Deck.pushBottom(p2Played, p1Played);
        } else { // War
            console.log("war");
            // TODO
        }
        
        setP1Played(undefined);
        setP2Played(undefined);

        if (p1Deck.size() === 0) setWinner(2);
        else if (p2Deck.size() === 0) setWinner(1);
    };

    if (p1Deck && p2Deck) {
        return (
            <div className="game">
                <Player playerNumber={1} deck={p1Deck} />
                {p1Played && <Card suit={p1Played.suit} rank={p1Played.rank} />}
                {p1Played && p2Played
                    ? <button onClick={evaluate}>Evaluate</button>
                    : <button onClick={play}>Play</button>}
                <Player playerNumber={2} deck={p2Deck} />
                {p2Played && <Card suit={p2Played.suit} rank={p2Played.rank} />}
            </div>
        )
    } else {
        return null;
    }

};

export default Game;