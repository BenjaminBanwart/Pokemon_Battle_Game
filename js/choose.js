// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//pokemon selection process
var doneButton = document.querySelector('.done').addEventListener("click", function() {
    modal.style.display = "none";
    user.pokemon = []
    cpu.pokemon = []
    let inputPokemonlist = document.querySelectorAll('.pokeInputDiv')
    let totalnum = 0;
    for(let i = 0; i < inputPokemonlist.length; i++) {
        totalnum += Number(inputPokemonlist[i].children[0].children[0].value)
    }
    if(totalnum < 3 || totalnum > 3) {
        //unhide error text
        modal.style.display = "block";
        document.querySelector('.errorMessage').style.visibility = 'visible';
    }else {
        document.querySelector('.errorMessage').style.visibility = 'hidden';
        for(let i = 0; i < inputPokemonlist.length; i++) {
            let pokemonCount = Number(inputPokemonlist[i].children[0].children[0].value)
            let pokemonName = inputPokemonlist[i].children[0].textContent.trim();
            for(let j = 0; j < pokemonCount; j++) {
                getPokemonByName(pokemonName, pokemonCount)
            }
        }
        console.log("final pokemon list")
        console.log(user.pokemon)
        getComputerChoice()
        getCurrentPokemon()
        user.createUserPokemon()
        cpu.createComputerPokemon()
        fight()
    }
})

//takes the name of the pokemon button input and compares it with the pokemon class names
function getPokemonByName(name, count) {  
    for(let p = 0; p < pokemonChoices.length; p++) {
        if(name == pokemonChoices[p].name) {
            user.pokemon.push(pokemonChoices[p])
        }
    }
}

//selects the pokemon to start the battle
function getCurrentPokemon() {
    user.currentPokemon.push(user.pokemon[0])
    user.pokemon.splice(0, 1);
    cpu.currentPokemon.push(cpu.pokemon[0])
    cpu.pokemon.splice(0, 1);
}

//selects all three computer pokemon
function getComputerChoice() {
    let choice1 = Math.floor(Math.random() * 10) + 1;
    let choice2 = Math.floor(Math.random() * 10) + 1;
    let choice3 = Math.floor(Math.random() * 10) + 1;
    for(let f = 0; f < pokemonChoices.length; f++) {
        if(pokemonChoices[f].sku == choice1 || pokemonChoices[f].sku == choice2 || pokemonChoices[f].sku == choice3) {
            cpu.pokemon.push(pokemonChoices[f])
        }
    }
}