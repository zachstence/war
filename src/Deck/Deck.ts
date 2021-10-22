const SUITS = ['spades', 'hearts', 'diamonds', 'clubs'] as const;
export type Suit = (typeof SUITS)[number];

const RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;
export type Rank =  (typeof RANKS)[number];

export interface CardInfo {
    suit: Suit;
    rank: Rank;
}

class Deck {
    private cards: CardInfo[] = [];

    constructor() {
        this.reset();
    }

    reset(): void {
        for (const suit of SUITS) {
            for (const value of RANKS) {
                this.cards.push({suit, rank: value});
            }
        }
    }

    draw(): CardInfo | undefined {
        return this.cards.shift();
    }

    pushBottom(card: CardInfo): void {
        this.cards.push(card);
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    getCards(): CardInfo[] {
        return this.cards;
    }
}

export default Deck;