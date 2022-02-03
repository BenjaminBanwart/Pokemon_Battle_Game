const user = {
    turn: true,
    pokemon: [],
    currentPokemon: [],

    //user's pokemon is placed onto the battlefield
    createUserPokemon() {
        const img = document.createElement('img');
        img.src = snivy.image;
        img.className = 'img-size';
        document.getElementById('playerPokemon').appendChild(img);
    }
}

user.createUserPokemon()