import Deck from "../Deck/Deck";

class Game {
    private player1: Deck = new Deck();
    private player2: Deck = new Deck();
    
    constructor() {
        const deck = new Deck();
        deck.init();
        deck.shuffle();

        while (deck.getCards().length) {
            const card = deck.draw();
            
            if (deck.getCards().length % 2 === 0) this.player1.pushBottom(card);
            else this.player2.pushBottom(card);
        }

        console.log(this.player1.getCards().length);
        console.log(this.player2.getCards().length);
    }


}

export default Game;