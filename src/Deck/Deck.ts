const SUITS = ['spades', 'hearts', 'diamonds', 'clubs'] as const;
export type Suit = (typeof SUITS)[number];

const RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;
export type Rank =  (typeof RANKS)[number];

/**
 * A representation of a standard playing card with a suit (Spades, Hearts, Diamonds, or Clubs),
 * and a rank (A, 2-10, J, Q, or K).
 */
export interface CardInfo {
    suit: Suit;
    rank: Rank;
}

/**
 * A deck of a subset of 52 playing cards. Cards can be drawn from the top and added back to the bottom of the deck.
 */
class Deck {
    private cards: CardInfo[] = [];

    /**
     * Create a new deck. If cards are specified, they are used in the deck. If not, the deck is initialized
     * with the standard 52 playing cards in order.
     * @param cards The (optional) cards to initialize the deck with.
     */
    constructor(cards?: CardInfo[]) {
        if (cards) {
            this.cards = cards;
        } else {
            this.init();
        }
    }

    /**
     * Initializes the deck with one of each of the standard 52 playing cards.
     */
    private init(): void {
        for (const suit of SUITS) {
            for (const rank of RANKS) {
                this.cards.push({suit, rank});
            }
        }
    }

    /**
     * Removes and returns the card on top of the deck.
     * @returns The card that was drawn.
     * @throws An error if the deck is empty when drawing.
     */
    draw(): CardInfo {
        const card = this.cards.shift();
        if (!card) throw new Error("Cannot draw from an empty deck");
        return card;
    }

    /**
     * Adds cards to the bottom of the deck.
     * @param cards The cards to add to the bottom of the deck.
     */
    pushBottom(...cards: CardInfo[]): void {
        this.cards.push(...cards);
    }

    /**
     * Shuffles the deck using a modernized version of the Fisher-Yates algorithm.
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
     */
    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    /**
     * Splits the deck evenly into two halves. If the deck contains an odd number of cards,
     * the second half will contain one more card than the first half.
     * @returns A 2-element array containing the two halves of the deck.
     */
    split(): [Deck, Deck] {
        const half1 = this.cards.slice(0, (this.cards.length) / 2);
        const half2 = this.cards.slice(this.cards.length / 2, this.cards.length);
        return [
            new Deck(half1),
            new Deck(half2)
        ];
    }

    /**
     * Gets the cards in the deck.
     * @returns The cards in the deck.
     */
    getCards(): CardInfo[] {
        return this.cards;
    }

    /**
     * The number of cards in the deck.
     * @returns the number of cards in the deck.
     */
    size(): number {
        return this.cards.length;
    }
}

export default Deck;