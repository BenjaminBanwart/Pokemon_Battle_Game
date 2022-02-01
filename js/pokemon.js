//pokemon class works as blueprint for each individual pokemon
class Pokemon {
    constructor (name, health, image, m1, m2, m3, m4){
        this.name = name;
        this.health = health;
        this.image = image;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
        this.m4 = m4;
    }
}

//pokemon are created here
var charizard = new Pokemon("Charizard", 150, "./assets/pngfind.com-charizard-sprite-png-4458716-min.png", () => {return {name: "cut", damage: 30}}, () => {return {name: "flamethrower", damage: 45}}, () => {return {name: "dragonRage", damage: 70}}, () => {return {name: "rockSlide", damage: 60}});
var gyarados = new Pokemon("Gyarados", 140, "./assets/oie_124642GgjIgslR.png", () => {return {name: "tackle", damage: 30}}, () => {return {name: "hydroPump", damage: 50}}, () => {return {name: "dragonRage", damage: 70}}, () => {return {name: "surf", damage: 45}})

//user's pokemon is placed onto the battlefield
function createUserPokemon() {
    const img = document.createElement('img');
    img.src = gyarados.image;
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