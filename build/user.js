"use strict";
const user = {
    turn: true,
    pokemon: [],
    currentPokemon: [],
    //user's pokemon is placed onto the battlefield
    createUserPokemon() {
        const img = document.createElement('img');
        img.src = user.currentPokemon[0].image;
        img.id = 'playerImage';
        img.className = 'img-size';
        document.getElementById('playerPokemon').appendChild(img);
    }
};
console.log(user);
