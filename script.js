const pokemon = {
    name: "charizard",
    health: "150",
    turn: false,

    images: {
        front: "./assets/pngfind.com-charizard-sprite-png-4458716.png",
        back: "./assets/pngfind.com-charzard-png-4911765.png"
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


function createPokemon() {
    const img = document.createElement('img');
    img.src = pokemon.images.front;
    document.getElementById('playerPokemon').appendChild(img);
}