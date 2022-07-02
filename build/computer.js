"use strict";
const cpu = {
    turn: false,
    pokemon: [],
    currentPokemon: [],
    //computer's pokemon is placed onto the battlefield
    createComputerPokemon() {
        const img = document.createElement('img');
        img.src = cpu.currentPokemon[0].image;
        img.id = 'computerImage';
        img.className = 'img-size';
        document.getElementById('computerPokemon').appendChild(img);
    }
};
console.log(cpu);
