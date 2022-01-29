const pokemon = {
    name: "charizard",
    health: "150",
    turn: false,

    images: {
        front: "./assets/pngfind.com-charizard-sprite-png-4458716-min.png",
        back: "./assets/pngfind.com-charzard-png-4911765-min.png"
    },

    moves: {
        cut: {
            damage: "30"
        },
        flamethrower: {
            damage: "45"
        },
        dragonRage: {
            damage: "70"
        },
        rockSlide: {
            damage: "60"
        }
    }
}


function createMyPokemon() {
    const img = document.createElement('img');
    img.src = pokemon.images.front;
    img.className = 'img-size';
    document.getElementById('playerPokemon').appendChild(img);
    const name = pokemon.name;
    const health = pokemon.health;
    const turn = pokemon.turn;
    const moves = pokemon.moves;
}


function createComputerPokemon() {
    const img = document.createElement('img');
    img.src = pokemon.images.back;
    img.className = 'img-size';
    document.getElementById('computerPokemon').appendChild(img);
    const name = pokemon.name;
    const health = pokemon.health;
    const turn = pokemon.turn;
    const moves = pokemon.moves;
}

createComputerPokemon()
createMyPokemon()