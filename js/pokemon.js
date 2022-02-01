//pokemon class works as blueprint for each individual pokemon
class Pokemon {
    constructor (name, health, image, type, m1, m2, m3, m4){
        this.name = name;
        this.health = health;
        this.image = image;
        this.type = type;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
        this.m4 = m4;
    }
}

//pokemon are created here
var charizard = new Pokemon("Charizard", 150, "./assets/pngfind.com-charizard-sprite-png-4458716-min.png", ['fire', 'dragon'], () => {return {name: "cut", damage: 30, type: "normal"}}, () => {return {name: "flamethrower", damage: 45, type: "fire"}}, () => {return {name: "dragonRage", damage: 70, type: "dragon"}}, () => {return {name: "rockSlide", damage: 60, type: "rock"}});
var gyarados = new Pokemon("Gyarados", 140, "./assets/oie_124642GgjIgslR.png", ['water', 'dragon'], () => {return {name: "tackle", damage: 30, type: "normal"}}, () => {return {name: "hydroPump", damage: 50, type: "water"}}, () => {return {name: "dragonRage", damage: 70, type: "dragon"}}, () => {return {name: "surf", damage: 45, type: "water"}})
var pikachu = new Pokemon("Pikachu",100, "./assets/pngegg-min.png", ['electric'], () => {return {name: "tackle", damage: 30, type: "normal"}}, () => {return {name: "thunderPunch", damage: 40, type: "electric"}}, () => {return {name: "Thunderbolt", damage: 60, type: "electric"}}, () => {return {name: "mudSlap", damage: 50, type: "ground"}})

//user's pokemon is placed onto the battlefield
function createUserPokemon() {
    const img = document.createElement('img');
    img.src = charizard.image;
    img.className = 'img-size';
    document.getElementById('playerPokemon').appendChild(img);
}

//computer's pokemon is placed onto the battlefield
function createComputerPokemon() {
    const img = document.createElement('img');
    img.src = charizard.image;
    img.className = 'img-size';
    document.getElementById('computerPokemon').appendChild(img);
}

createUserPokemon()
createComputerPokemon()