import React, { ReactElement, useEffect, useState } from "react";
import Deck from "../../Deck/Deck";
import Card, { CardProps } from "../Card/Card";
import "./Game.scss";

/**
 * Renders a playable War game, where two players fight cards against each other.
 * Rules: https://bicyclecards.com/how-to-play/war/
 */
const Game: React.FC = () => {
    const [p1Deck, setP1Deck] = useState<Deck>();
    const [p1Played, setP1Played] = useState<CardProps[]>([]);

    const [p2Deck, setP2Deck] = useState<Deck>();
    const [p2Played, setP2Played] = useState<CardProps[]>([]);

    const [isWar, setIsWar] = useState<boolean>(false);

    const [canPlay, setCanPlay] = useState<boolean>(true);

    const [gameOver, setGameOver] = useState<boolean>(false);

    /**
     * Sets up each player with half of a standard deck of playing cards.
     */
    const init = (): void => {
        const fullDeck = new Deck();
        fullDeck.shuffle();

        const [d1, d2] = fullDeck.split();
        setP1Deck(d1);
        setP2Deck(d2);
    }

    // Initialize on component mount
    useEffect(init, []);

    /**
     * Plays one card from each player, or plays 2 cards in the event of a "war".
     */
    const play = (): void => {
        if (!p1Deck || !p2Deck) throw new Error("Cannot play with an empty deck");

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

    /**
     * Evaluates the cards played by each player and determines who wins the round, then resets
     * the played cards so players can play another round.
     * Ends the game if either player has 0 cards in their deck.
     */
    const evaluate = (): void => {
        if (!p1Played || !p2Played || !p1Deck || !p2Deck) throw new Error("Cannot evaluate with empty played cards or empty deck");

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
            
            if (p1Deck.size() === 0 || p2Deck.size() === 0) setGameOver(true);
        }

        setCanPlay(true);
    };

    /**
     * Renders a player's played cards.
     * @param played The props of cards to render.
     */
    const renderCards = (played: CardProps[]): ReactElement[] => {
        return played.map(card => (
            <Card key={`${card.rank}${card.suit}`} {...card} />
        ));
    }

    if (!gameOver && p1Deck && p2Deck) {
        return (
            <main className={`game${isWar ? " war" : ""}`}>
                <div className="player">
                    <h2>PLAYER 1</h2>
                    <p>{p1Deck.size()} cards remaining</p>
                    <div className="played-cards">{renderCards(p1Played)}</div>
                </div>
                <div className="middle">
                    {canPlay
                        ? <button onClick={play}>Play</button>
                        : <button onClick={evaluate}>Evaluate</button>}
                </div>
                <div className="player">
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