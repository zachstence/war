import Deck, { CardInfo } from "./Deck";

describe("Deck", () => {
    let deck: Deck;

    const unshuffledCards: CardInfo[] = [
        {suit: "spades", rank: 1},
        {suit: "spades", rank: 2},
        {suit: "spades", rank: 3},
        {suit: "spades", rank: 4},
        {suit: "spades", rank: 5},
        {suit: "spades", rank: 6},
        {suit: "spades", rank: 7},
        {suit: "spades", rank: 8},
        {suit: "spades", rank: 9},
        {suit: "spades", rank: 10},
        {suit: "spades", rank: 11},
        {suit: "spades", rank: 12},
        {suit: "spades", rank: 13},
        {suit: "hearts", rank: 1},
        {suit: "hearts", rank: 2},
        {suit: "hearts", rank: 3},
        {suit: "hearts", rank: 4},
        {suit: "hearts", rank: 5},
        {suit: "hearts", rank: 6},
        {suit: "hearts", rank: 7},
        {suit: "hearts", rank: 8},
        {suit: "hearts", rank: 9},
        {suit: "hearts", rank: 10},
        {suit: "hearts", rank: 11},
        {suit: "hearts", rank: 12},
        {suit: "hearts", rank: 13},
        {suit: "diamonds", rank: 1},
        {suit: "diamonds", rank: 2},
        {suit: "diamonds", rank: 3},
        {suit: "diamonds", rank: 4},
        {suit: "diamonds", rank: 5},
        {suit: "diamonds", rank: 6},
        {suit: "diamonds", rank: 7},
        {suit: "diamonds", rank: 8},
        {suit: "diamonds", rank: 9},
        {suit: "diamonds", rank: 10},
        {suit: "diamonds", rank: 11},
        {suit: "diamonds", rank: 12},
        {suit: "diamonds", rank: 13},
        {suit: "clubs", rank: 1},
        {suit: "clubs", rank: 2},
        {suit: "clubs", rank: 3},
        {suit: "clubs", rank: 4},
        {suit: "clubs", rank: 5},
        {suit: "clubs", rank: 6},
        {suit: "clubs", rank: 7},
        {suit: "clubs", rank: 8},
        {suit: "clubs", rank: 9},
        {suit: "clubs", rank: 10},
        {suit: "clubs", rank: 11},
        {suit: "clubs", rank: 12},
        {suit: "clubs", rank: 13},
    ];

    beforeEach(() => {
        deck = new Deck();
    });

    it("should be initialized with one card from each suit and rank", () => {
        const actualCards = deck.getCards();

        expect(actualCards).toEqual(unshuffledCards);
    });

    test("draw() should remove and return the first card from the deck", () => {
        while (deck.getCards().length) {
            const expectedCard = deck.getCards()[0];
            const actualCard = deck.draw();

            expect(actualCard).toEqual(expectedCard);
        }
    });

    test("pushBottom() should add a given card to the bottom of the deck", () => {
        const card: CardInfo = {suit: "clubs", rank: 8};
        const before = [...deck.getCards()];

        deck.pushBottom(card);
        
        const after = deck.getCards();

        expect(after).toEqual([...before, card]);
    });

    test("shuffle() should mix the cards order", () => {
        deck.shuffle();
        const shuffled1 = [...deck.getCards()];

        deck.shuffle();
        const shuffled2 = [...deck.getCards()];

        deck.shuffle();
        const shuffled3 = [...deck.getCards()];

        deck.shuffle();
        const shuffled4 = [...deck.getCards()];

        expect(shuffled1).not.toEqual(unshuffledCards);
        expect(shuffled2).not.toEqual(unshuffledCards);
        expect(shuffled3).not.toEqual(unshuffledCards);
        expect(shuffled4).not.toEqual(unshuffledCards);

        expect(shuffled1).not.toEqual(shuffled2);
        expect(shuffled1).not.toEqual(shuffled3);
        expect(shuffled1).not.toEqual(shuffled4);
        
        expect(shuffled2).not.toEqual(shuffled3);
        expect(shuffled2).not.toEqual(shuffled4);

        expect(shuffled3).not.toEqual(shuffled4);
    });
});