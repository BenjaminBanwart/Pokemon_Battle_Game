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

    //gives move buttons initial text
    button1.innerHTML = user.currentPokemon[0].m1.name;
    button2.innerHTML = user.currentPokemon[0].m2.name;
    button3.innerHTML = user.currentPokemon[0].m3.name;
    button4.innerHTML = user.currentPokemon[0].m4.name;

    //calculate remaining health, adjust progress bar using .value
    function userDamage(damage) {
        if(Number(computerPokemonProgressBar.value) >= damage) {
            return cpu.currentPokemon[0].health = Number(computerPokemonProgressBar.value) - damage;
        } else {return cpu.currentPokemon[0].health = Number(computerPokemonProgressBar.value) - cpu.currentPokemon[0].health}
    }

    //calculate remaining health, adjusts progress bar using .value
    function cpuDamage(damage) {
        if(Number(userPokemonProgressBar.value) >= damage) {
            return user.currentPokemon[0].health = Number(userPokemonProgressBar.value) - damage;
        } else {return user.currentPokemon[0].health = Number(userPokemonProgressBar.value) - user.currentPokemon[0].health}
    }

    button1.addEventListener('click', function () {
        userRealDamage(user.currentPokemon[0].m1.type, user.currentPokemon[0].m1.damage)
        user.turn = false;
        cpu.turn = true;
        swapComputerPokemon()
        if(user.turn == false && cpu.currentPokemon[0].health > 0) {
            //on computer turn, hide attack move buttons
            disableButtons()
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        cpuRealDamage(computerPokemonMoves[m].type, computerPokemonMoves[m].damage)
                        user.turn = true;
                        cpu.turn = false;
                        swapUserPokemon()
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            enableButtons()
                        }   
                    }, 3000);
                }
            }
        }
    })

    button2.addEventListener('click', function () {
        userRealDamage(user.currentPokemon[0].m2.type, user.currentPokemon[0].m2.damage)
        user.turn = false;
        cpu.turn = true;
        swapComputerPokemon()
        if(user.turn == false && cpu.currentPokemon[0].health > 0) {
            //on computer turn, hide attack move buttons
            disableButtons()
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        cpuRealDamage(computerPokemonMoves[m].type, computerPokemonMoves[m].damage)
                        user.turn = true;
                        cpu.turn = false;
                        swapUserPokemon()
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            enableButtons()
                        }   
                    }, 3000);
                }
            }
        }
    })

    button3.addEventListener('click', function () {
        userRealDamage(user.currentPokemon[0].m3.type, user.currentPokemon[0].m3.damage)
        user.turn = false;
        cpu.turn = true;
        swapComputerPokemon()
        if(user.turn == false && cpu.currentPokemon[0].health > 0) {
            //on computer turn, hide attack move buttons
            disableButtons()
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        cpuRealDamage(computerPokemonMoves[m].type, computerPokemonMoves[m].damage)
                        user.turn = true;
                        cpu.turn = false;
                        swapUserPokemon()
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            enableButtons()
                        }
                    }, 3000);
                }
            }
        }
    })

    button4.addEventListener('click', function () {
        userRealDamage(user.currentPokemon[0].m4.type, user.currentPokemon[0].m4.damage)
        user.turn = false;
        cpu.turn = true;
        swapComputerPokemon()
        if(user.turn == false && cpu.currentPokemon[0].health > 0) {
            //on computer turn, hide attack move buttons
            disableButtons()
            let computerChoice = Math.floor(Math.random() * 4) + 1;
            for(let m = 0; m < computerPokemonMoves.length; m++) {
                if(computerPokemonMoves[m].sku == computerChoice) {
                    //computer's turn happens after 3 seconds
                    setTimeout(() => {
                        cpuRealDamage(computerPokemonMoves[m].type, computerPokemonMoves[m].damage)
                        user.turn = true;
                        cpu.turn = false;
                        swapUserPokemon()
                        if(user.turn == true) {
                            //on user turn, attack move buttons become available again
                            enableButtons()
                        }   
                    }, 3000);
                }
            }
        }
    })

    //insert function whenever user's pokemon might get KO'd
    function swapUserPokemon() {
        if(user.currentPokemon[0].health <= 0) {
            user.currentPokemon.splice(0, 1);
            if(user.pokemon.length > 0) {
                user.currentPokemon.push(user.pokemon[0]);
                user.pokemon.splice(0, 1)
                button1.innerHTML = user.currentPokemon[0].m1.name;
                button2.innerHTML = user.currentPokemon[0].m2.name;
                button3.innerHTML = user.currentPokemon[0].m3.name;
                button4.innerHTML = user.currentPokemon[0].m4.name;
                setTimeout(() => {
                    //updates game with new current user pokemon
                    userPokemonProgressBar.value = user.currentPokemon[0].health;
                    userPokemonProgressBar.max = user.currentPokemon[0].health;
                    userPokemonName.innerHTML = user.currentPokemon[0].name;
                    document.getElementById('playerImage').src = user.currentPokemon[0].image;
                }, 1500);
            } else {
                setTimeout(() => {
                    document.getElementById('gameOverDiv').style.visibility = "visible";
                }, 1300);
            }
        }
    }

    //insert function whenever computer's pokemon might get KO'd
    function swapComputerPokemon() {
        if(cpu.currentPokemon[0].health <= 0) {
            cpu.currentPokemon.splice(0, 1);
            if(cpu.pokemon.length > 0) {
                cpu.currentPokemon.push(cpu.pokemon[0]);
                cpu.pokemon.splice(0, 1)
                setTimeout(() => {
                    //updates game with new current computer pokemon
                    computerPokemonProgressBar.value = cpu.currentPokemon[0].health;
                    computerPokemonProgressBar.max = cpu.currentPokemon[0].health;
                    computerPokemonName.innerHTML = cpu.currentPokemon[0].name;
                    document.getElementById('computerImage').src = cpu.currentPokemon[0].image;
                }, 1500);
            } else {
                setTimeout(() => {
                    document.getElementById('winDiv').style.visibility = "visible";
                }, 1300);
            }
        }
    }

    //insert function when it is computer's  turn
    function disableButtons() {
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
    }

    //insert function when it is user's turn
    function enableButtons() {
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
    }

    function userRealDamage(type, damage) {
        if(cpu.currentPokemon[0].weakness.includes(type)) {
            document.getElementById('computerHealthbar').value = userDamage(damage);
            document.getElementById('computerHealthbar').value = userDamage(damage);
        } else {
            document.getElementById('computerHealthbar').value = userDamage(damage);
        }
    }

    function cpuRealDamage(type, damage) {
        if(user.currentPokemon[0].weakness.includes(type)) {
            document.getElementById('userHealthbar').value = cpuDamage(damage);
            document.getElementById('userHealthbar').value = cpuDamage(damage);
        } else {
            document.getElementById('userHealthbar').value = cpuDamage(damage);
        }
    }

    function userMoveAnimation() {
        
    }

    function computerMoveAnimation() {

    }
}