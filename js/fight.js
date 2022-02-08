function fight() {
    let userPokemonProgressBar = document.getElementById('userHealthbar')
    userPokemonProgressBar.value = user.currentPokemon[0].health;
    userPokemonProgressBar.max = user.currentPokemon[0].health;


    let userPokemonHealthNumber = document.getElementById('userHealth')
    userPokemonHealthNumber.innerHTML = user.currentPokemon[0].health;

    let userPokemonName = document.getElementById('userPokemonName')
    userPokemonName.innerHTML = user.currentPokemon[0].name;

    let computerPokemonProgressBar = document.getElementById('computerHealthbar')
    computerPokemonProgressBar.value = cpu.currentPokemon[0].health;
    computerPokemonProgressBar.max = cpu.currentPokemon[0].health;

    let computerPokemonHealthNumber = document.getElementById('computerHealth')
    computerPokemonHealthNumber.innerHTML = cpu.currentPokemon[0].health;

    let computerPokemonName = document.getElementById('computerPokemonName')
    computerPokemonName.innerHTML = cpu.currentPokemon[0].name;

    let button1 = document.getElementById('attack1')
    let button2 = document.getElementById('attack2')
    let button3 = document.getElementById('attack3')
    let button4 = document.getElementById('attack4')


    console.log(computerPokemonProgressBar.value)



    //gives move buttons text
    button1.innerHTML = user.currentPokemon[0].m1.name;
    button2.innerHTML = user.currentPokemon[0].m2.name;
    button3.innerHTML = user.currentPokemon[0].m3.name;
    button4.innerHTML = user.currentPokemon[0].m4.name;

    //it's going to calculate remaining health, if pokemon is dead grab the next pokemon, adjust progress bar using .value, update hp text
    function userDamage(damage) {
        return Number(computerPokemonProgressBar.value) - damage;
    }

    //it's going to calculate remaining health, if pokemon is dead grab the next pokemon, adjust progress bar using .value, update hp text
    function cpuDamage(damage) {
        return Number(userPokemonProgressBar.value) - damage;
    }

    //on computer turn, hide attack move buttons


    button1.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m1.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false && cpu.turn == true) {
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        }
    })
    button2.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m2.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false && cpu.turn == true) {
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        }
    })
    button3.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m3.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false && cpu.turn == true) {
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        }
    })
    button4.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m4.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false && cpu.turn == true) {
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
        }
    })
}
