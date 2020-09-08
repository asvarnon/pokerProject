// (function (){
"use strict";


var suits = ["spades", "hearts", "clubs", "diamonds"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var deck = [];


const getDeck = () => {
    deck = [];
    // deck array assignment above is most likely used to reset the deck each time
    // the function is invoked therefore making up and shuffling a new deck
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

const shuffle = (deck) => {
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



let players = [];
const createPlayer = (number) => {
    players = [];
    for(var i = 0; i <= number; i++){
        var playerName = prompt("Name of Player 1:");
        if (playerName === "") {
            alert("Please enter valid name");
            playerName;
        }
        var hand = [];
        var player = {
            name: playerName,
            ID: i,
            points: 0,
            Hand: hand
            //hand is what is in the "Hand Array" which is currently empty
        };
        players.push(player);
    }
}

//TODO: create player UI

const createPlayersUI = () => {
    document.getElementById('players').innerHTML = '';
    for (let player of players) {

        var div_player = document.createElement('div');
        var div_playerid = document.createElement('div');
        var div_hand = document.createElement('div');
        var div_points = document.createElement('div');

        div_points.className = 'points';
        div_points.id = 'points_' + i;
        div_player.id = 'player_' + i;
        div_player.className = 'player';
        div_hand.id = 'hand_' + i;

        div_playerid.innerHTML = players[i].ID;
        div_player.appendChild(div_playerid);
        div_player.appendChild(div_hand);
        div_player.appendChild(div_points);
        document.getElementById('players').appendChild(div_player);
    }
}





















// })();