import React from "react";
import {Card, Rank, Suit} from "../../Deck/Deck";

const suitToChar = (suit: Suit) => {
    switch (suit) {
        case "spades": return "♤";
        case "hearts": return "♡";
        case "diamonds": return "♢";
        case "clubs": return "♧";
    }
}

const rankToChar = (rank: Rank) => {
    switch (rank) {
        case 1:
            return "A";
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return rank.toString();
        case 11:
            return "J";
        case 12:
            return "Q";
        case 13:
            return "K";
    }
}

interface CardCompProps {
    card: Card;
}

const CardComp: React.FC<CardCompProps> = ({card: {rank, suit}}) => {
    return (
        <div className="card">
            {rankToChar(rank)}
            {suitToChar(suit)}
        </div>
    );
};

export default CardComp;