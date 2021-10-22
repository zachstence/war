import React from "react";
import "./Card.scss";
import { CardInfo, Rank, Suit } from "../../Deck/Deck";

/**
 * Converts a Suit to a character to show on a card.
 * @param suit The suit to convert to a character.
 * @returns An ASCII character representation of the given suit.
 */
const suitToChar = (suit: Suit): string => {
    switch (suit) {
        case "spades": return "♠";
        case "hearts": return "♥";
        case "diamonds": return "♦";
        case "clubs": return "♣";
    }
}

/**
 * Converts a Rank to a character to show on a card.
 * 1 becomes A, 2-10 are unchanged, 11 becomes J, 12 becomes Q, and 13 becomes K.
 * @param rank The rank to convert to a character.
 * @returns  An ASCII character representation of the given rank.
 */
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

export interface CardProps extends CardInfo {
    faceUp: boolean;
}

/**
 * Renders a playing card with a given suit and rank. The suit and rank are not rendered
 * if faceUp=false.
 */
const Card: React.FC<CardProps> = ({rank, suit, faceUp}) => {
    if (faceUp) {
        return (
            <div className="card">
                {rankToChar(rank)}{suitToChar(suit)}
            </div>
        );
    } else {
        return (
            <div className="card face-down" />
        )
    }
};

export default Card;