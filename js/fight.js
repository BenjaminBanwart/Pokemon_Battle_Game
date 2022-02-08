function fight() {
    let userPokemonProgressBar = document.getElementById('userHealthbar')
    userPokemonProgressBar.value = user.currentPokemon[0].health;
    userPokemonProgressBar.max = user.currentPokemon[0].health;

    let userPokemonName = document.getElementById('userPokemonName')
    userPokemonName.innerHTML = user.currentPokemon[0].name;

    let computerPokemonProgressBar = document.getElementById('computerHealthbar')
    computerPokemonProgressBar.value = cpu.currentPokemon[0].health;
    computerPokemonProgressBar.max = cpu.currentPokemon[0].health;

    let computerPokemonName = document.getElementById('computerPokemonName')
    computerPokemonName.innerHTML = cpu.currentPokemon[0].name;

    let button1 = document.getElementById('attack1')
    let button2 = document.getElementById('attack2')
    let button3 = document.getElementById('attack3')
    let button4 = document.getElementById('attack4')

    let computerPokemonMoves = [user.currentPokemon[0].m1, user.currentPokemon[0].m2, user.currentPokemon[0].m3, user.currentPokemon[0].m4];

    //gives move buttons text
    button1.innerHTML = user.currentPokemon[0].m1.name;
    button2.innerHTML = user.currentPokemon[0].m2.name;
    button3.innerHTML = user.currentPokemon[0].m3.name;
    button4.innerHTML = user.currentPokemon[0].m4.name;

    //it's going to calculate remaining health, if pokemon is dead grab the next pokemon, adjust progress bar using .value, update hp text
    function userDamage(damage) {
        user.currentPokemon[0].health = Number(computerPokemonProgressBar.value) - damage;
        return Number(computerPokemonProgressBar.value) - damage;
    }

    //it's going to calculate remaining health, adjusts progress bar using .value
    function cpuDamage(damage) {
        cpu.currentPokemon[0].health = Number(userPokemonProgressBar.value) - damage;
        return Number(userPokemonProgressBar.value) - damage;
    }

    button1.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m1.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false) {
            //on computer turn, hide attack move buttons
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        document.getElementById('userHealthbar').value = cpuDamage(computerPokemonMoves[m].damage);
                        user.turn = true;
                        cpu.turn = false;
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            button1.disabled = false;
                            button2.disabled = false;
                            button3.disabled = false;
                            button4.disabled = false;
                        }   
                    }, 3000);
                }
            }
        }
    })

    button2.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m2.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false) {
            //on computer turn, hide attack move buttons
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        document.getElementById('userHealthbar').value = cpuDamage(computerPokemonMoves[m].damage);
                        user.turn = true;
                        cpu.turn = false;
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            button1.disabled = false;
                            button2.disabled = false;
                            button3.disabled = false;
                            button4.disabled = false;
                        }   
                    }, 3000);
                }
            }
        }
    })

    button3.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m3.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false) {
            //on computer turn, hide attack move buttons
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        document.getElementById('userHealthbar').value = cpuDamage(computerPokemonMoves[m].damage);
                        user.turn = true;
                        cpu.turn = false;
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            button1.disabled = false;
                            button2.disabled = false;
                            button3.disabled = false;
                            button4.disabled = false;
                        }   
                    }, 3000);
                }
            }
        }
    })

    button4.addEventListener('click', function () {
        document.getElementById('computerHealthbar').value = userDamage(user.currentPokemon[0].m4.damage);
        user.turn = false;
        cpu.turn = true;
        if(user.turn == false) {
            //on computer turn, hide attack move buttons
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            button4.disabled = true;
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        document.getElementById('userHealthbar').value = cpuDamage(computerPokemonMoves[m].damage);
                        user.turn = true;
                        cpu.turn = false;
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            button1.disabled = false;
                            button2.disabled = false;
                            button3.disabled = false;
                            button4.disabled = false;
                        }   
                    }, 3000);
                }
            }
        }
    })
    if(user.currentPokemon[0].health <= 0) {
        console.log('hi')
        user.currentPokemon.pop();
        //user.currentPokemon.push(user.pokemon[1]);
    }
}
