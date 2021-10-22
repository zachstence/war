import React from "react";
import classNames from "classnames";
import {CardInfo, Rank, Suit} from "../../Deck/Deck";
import "./Card.scss";

const suitToChar = (suit: Suit): string => {
    switch (suit) {
        case "spades": return "♠";
        case "hearts": return "♥";
        case "diamonds": return "♦";
        case "clubs": return "♣";
    }
}

const suitToColor = (suit: Suit): string => {
    switch (suit) {
        case "spades":
        case "clubs":
            return "black";
        case "hearts":
        case "diamonds":
            return "red";
    }
}

const rankToChar = (rank: Rank): string => {
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

const Card: React.FC<CardInfo> = ({rank, suit}) => {
    return (
        <div className={classNames("card", suitToColor(suit))}>
            {rankToChar(rank)}{suitToChar(suit)}
        </div>
    );
};

export default Card;