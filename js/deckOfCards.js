// (function (){
"use strict";

//TODO: BlackJack: https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
//TODO: pick up from shuffling deck

var suits = ["spades", "hearts", "clubs", "diamonds"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];


function getDeck(){

    deck = [];
    for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
            //giving letter cards a weight value
            var weight = parseInt(values[j]);
            if (values[j] == "J" || values[j] == "Q" || values[j] == "K"){
                weight = 10;
            }
            if (values[j] == "A"){
                weight = 11;
            }
            //pushes card into deck array
            var card = {Value: values[j], Suit: suits[i], Weight: weight};
            deck.push(card);
        }
    }
}


//shuffling algorithm courtesy of thatsoftwaredude.

function shuffle(deck){
    //for 750 turns
    //switches values of two random different cards
    for (var i = 0; i < 750; i++) {
        //get random card locations
        var location1 = Math.floor(Math.random() * deck.length);
        var location2 = Math.floor(Math.random() * deck.length);

        //next variable is placeholder for first location card to be held in
        var placeholder = deck[location1];
        // location1 is now empty

        //now we put card in location2 into location1
        deck[location1] = deck[location2];

        //now we put card in placeholder into location 2
        deck[location2] = placeholder;
    }
}


























// })();