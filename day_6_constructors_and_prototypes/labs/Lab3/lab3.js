class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
    toString(){
        const arrNum = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
        let valueString = arrNum[this.value-1];
        return `The ${valueString} of ${this.suit}`;
        
        
       
    }
}

class Deck{
    constructor(){
    
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const arrNum = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    const cards = [];
    var cardsReset = [];
        for (let suit of suits){
            for (let value of arrNum){
                cards.push(new Card(value, suit));
                cardsReset.push(new Card(value, suit));
            }
            
        }
        this.cards = cards;
        this.cardsReset = cardsReset;      
    }
    shuffle(cards){
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        while (0 !==currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -=1;
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    return this.cards;
        
    }
    draw(){
        return `you drew ${this.cards[0]}`;
        this.cards.shift;

    }
    reset(){
        this.cards = this.cardsReset;
        return this.cards;
        
    }
}

const aceOfSpades = new Card(1, 'spades');
const tenOfHearts = new Card(10, 'hearts');
const kingOfDiamonds = new Card(13, 'diamonds');

console.log(aceOfSpades.toString());
console.log(tenOfHearts.toString());
console.log(kingOfDiamonds.toString());

const playingCards = new Deck;
console.log(playingCards.shuffle());
console.log(playingCards.draw());
console.log(playingCards.reset());
console.log(playingCards.cards);
