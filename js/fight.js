function userFightButtonsText() {
    document.getElementById('attack1').innerHTML = user.currentPokemon[0].m1.name;
    document.getElementById('attack2').innerHTML = user.currentPokemon[0].m2.name;
    document.getElementById('attack3').innerHTML = user.currentPokemon[0].m3.name;
    document.getElementById('attack4').innerHTML = user.currentPokemon[0].m4.name;
}

