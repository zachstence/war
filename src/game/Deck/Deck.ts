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

    constructor(cards?: CardInfo[]) {
        if (cards) {
            this.cards = cards;
        } else {
            this.init();
        }
    }

    private init(): void {
        for (const suit of SUITS) {
            for (const rank of RANKS) {
                this.cards.push({suit, rank: rank});
            }
        }
    }

    draw(): CardInfo {
        const card = this.cards.shift();
        if (!card) throw new Error(); // TODO write helpful error message
        return card;
    }

    pushBottom(...cards: CardInfo[]): void {
        this.cards.push(...cards);
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    split(): [Deck, Deck] {
        const half1 = this.cards.slice(0, (this.cards.length) / 2);
        const half2 = this.cards.slice(this.cards.length / 2, this.cards.length);
        return [
            new Deck(half1),
            new Deck(half2)
        ];
    }

    getCards(): CardInfo[] {
        return this.cards;
    }

    size(): number {
        return this.cards.length;
    }
}

export default Deck;