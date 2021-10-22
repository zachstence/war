import React, { ReactElement, useEffect, useState } from "react";
import Deck from "../../Deck/Deck";
import Card, { CardProps } from "../Card/Card";
import "./Game.scss";

const Game: React.FC = () => {
    const [p1Deck, setP1Deck] = useState<Deck>();
    const [p1Played, setP1Played] = useState<CardProps[]>([]);

    const [p2Deck, setP2Deck] = useState<Deck>();
    const [p2Played, setP2Played] = useState<CardProps[]>([]);

    const [isWar, setIsWar] = useState<boolean>(false);

    const [canPlay, setCanPlay] = useState<boolean>(true);

    const [gameOver, setGameOver] = useState<boolean>(true);

    const init = (): void => {
        const fullDeck = new Deck();
        fullDeck.shuffle();

        const [d1, d2] = fullDeck.split();
        setP1Deck(d1);
        setP2Deck(d2);
    }

    useEffect(init, []);

    const play = (): void => {
        if (!p1Deck || !p2Deck) throw new Error(); // TODO

        setCanPlay(false);

        if (!isWar) { // If not war, each player draws and plays 1 card
            setP1Played([{...p1Deck.draw(), faceUp: true}]);
            setP2Played([{...p2Deck.draw(), faceUp: true}]);
        } else { // If war, each player draws and plays a face down card, then a face up card
            if (!p1Played || !p2Played) throw new Error();

            setP1Played([
                ...p1Played,
                {...p1Deck.draw(), faceUp: false},
                {...p1Deck.draw(), faceUp: true}
            ]);
            setP2Played([
                ...p2Played,
                {...p2Deck.draw(), faceUp: false},
                {...p2Deck.draw(), faceUp: true}
            ]);
        }
    };

    const evaluate = (): void => {
        if (!p1Played || !p2Played || !p1Deck || !p2Deck) throw new Error(); // TODO

        const p1Card = p1Played[p1Played.length - 1];
        const p2Card = p2Played[p2Played.length - 1];

        if (p1Card.rank === p2Card.rank) { // If ranks are equal, enter war state
            setIsWar(true);
        } else {
            if (p1Card.rank > p2Card.rank) { // Player 1 wins this round
                p1Deck.pushBottom(...p1Played, ...p2Played);
            } else if (p2Card.rank > p1Card.rank) { // Player 2 wins this round
                p2Deck.pushBottom(...p2Played, ...p1Played);
            }

            setP1Played([]);
            setP2Played([]);
            setIsWar(false);
            
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
            <main className={`game${isWar ? " war" : ""}`}>
                {/* <h1>WAR</h1> */}
                <div className="player left">
                    <h2>PLAYER 1</h2>
                    <p>{p1Deck.size()} cards remaining</p>
                    <div className="played-cards">{renderCards(p1Played)}</div>
                </div>
                <div className="middle">
                    {canPlay
                        ? <button onClick={play}>Play</button>
                        : <button onClick={evaluate}>Evaluate</button>}
                </div>
                <div className="player right">
                    <h2>PLAYER 2</h2>
                    <p>{p2Deck.size()} cards remaining</p>
                    <div className="played-cards">{renderCards(p2Played)}</div>
                </div>
            </main>
        )
    } else if (gameOver) {
        return (
            <main className="game-over">
                <h2>Game Over</h2>
                {p1Deck?.size() === 0 ? <h3>Player 2 Won!</h3> : <h3>Player 1 Won!</h3>}
                <button onClick={init}>Play Again</button>
            </main>
        );
    } else {
        return null;
    }

};

export default Game;