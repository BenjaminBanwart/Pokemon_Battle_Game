const cpu = {
    turn: false,
    pokemon: [],
    currentPokemon: []
}

//computer's pokemon is placed onto the battlefield
function createComputerPokemon() {
    const img = document.createElement('img');
    img.src = gengar.image;
    img.className = 'img-size';
    document.getElementById('computerPokemon').appendChild(img);
}

createComputerPokemon()