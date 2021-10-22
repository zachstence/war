import React, { ReactElement, useEffect, useState } from "react";
import Deck, { CardInfo } from "../../game/Deck/Deck";
import Card, { CardProps } from "../Card/Card";

const Game: React.FC = () => {
    const [p1Deck, setP1Deck] = useState<Deck>();
    const [p1Played, setP1Played] = useState<CardProps[]>([]);

    const [p2Deck, setP2Deck] = useState<Deck>();
    const [p2Played, setP2Played] = useState<CardProps[]>([]);

    const [isWar, setIsWar] = useState<boolean>(false);

    const [canPlay, setCanPlay] = useState<boolean>(true);

    const [gameOver, setGameOver] = useState<boolean>(false);

    useEffect(() => {
        const fullDeck = new Deck();
        fullDeck.shuffle();

        const [d1, d2] = fullDeck.split();
        setP1Deck(d1);
        setP2Deck(d2);
    }, []);

    const play = (): void => {
        if (!p1Deck || !p2Deck) throw new Error(); // TODO

        setCanPlay(false);

        if (!isWar) { // If not war, each player draws and plays 1 card
            setP1Played([{...p1Deck.draw(), faceUp: true}]);
            setP2Played([{...p2Deck.draw(), faceUp: true}]);
        } else { // If war, each player draws and plays a face down card, then a face up card
            if (!p1Played || !p2Played) throw new Error();

            setP1Played([...p1Played, {...p1Deck.draw(), faceUp: false}, {...p1Deck.draw(), faceUp: true}]);
            setP2Played([...p2Played, {...p2Deck.draw(), faceUp: false}, {...p2Deck.draw(), faceUp: true}]);
        }
    };

    const evaluate = (): void => {
        if (!p1Played || !p2Played || !p1Deck || !p2Deck) throw new Error(); // TODO

        const p1Card = p1Played[p1Played.length - 1];
        const p2Card = p2Played[p2Played.length - 1];

        if (p1Card.rank === p2Card.rank) { // If ranks are equal, enter war state
            console.log("war");
            setIsWar(true);
        } else {
            if (p1Card.rank > p2Card.rank) { // Player 1 wins this round
                console.log("p1");
                p1Deck.pushBottom(...p1Played, ...p2Played);
            } else if (p2Card.rank > p1Card.rank) { // Player 2 wins this round
                console.log("p2");
                p2Deck.pushBottom(...p2Played, ...p1Played);
            }

            setP1Played([]);
            setP2Played([]);
            
            // TODO
            if (p1Deck.size() === 0 || p2Deck.size() === 0) setGameOver(true);
        }

        setCanPlay(true);
    };

    const renderCards = (played: CardProps[]): ReactElement[] => {
        return played.map(card => (
            <Card key={`${card.rank}${card.suit}`} {...card} />
        ));
    }

    if (p1Deck && p2Deck) {
        return (
            <div className="game">
                Player 1
                <br />
                {p1Deck.size()}
                <br />
                {p1Played && renderCards(p1Played)}
                <br />
                {canPlay
                    ? <button onClick={play}>Play</button>
                    : <button onClick={evaluate}>Evaluate</button>}
                <br />
                Player 2
                <br />
                {p2Deck.size()}
                <br />
                {p2Played && renderCards(p2Played)}
            </div>
        )
    } else if (gameOver) {
        return <div>Game Over</div>;
    } else {
        return null;
    }

};

export default Game;