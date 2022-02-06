function userFightButtonsText() {
    document.getElementById('attack1').innerHTML = user.currentPokemon[0].m1.name;
    document.getElementById('attack2').innerHTML = user.currentPokemon[0].m2.name;
    document.getElementById('attack3').innerHTML = user.currentPokemon[0].m3.name;
    document.getElementById('attack4').innerHTML = user.currentPokemon[0].m4.name;
}

function userPokemonHealth() {
    let userPokemonBar = document.getElementById('userHealthbar').value = user.currentPokemon[0].health;
    let userPokemonHealth = document.getElementById('userHealth').innerHTML = user.currentPokemon[0].health + ' hp';
    var currentUserHealth = user.currentPokemon[0].health;
    return currentUserHealth
}

function computerPokemonHealth() {
    let computerPokemon = document.getElementById('computerHealthbar').value = cpu.currentPokemon[0].health;
    let computerPokemonHealth = document.getElementById('computerHealth').innerHTML = cpu.currentPokemon[0].health + ' hp';
    var currentComputerHealth = cpu.currentPokemon[0].health;
    return currentComputerHealth
}


//on computer turn, hide attack move buttons

