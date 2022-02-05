//pokemon class works as blueprint for each individual pokemon
class Pokemon {
    constructor (name, sku, health, image, weakness, m1, m2, m3, m4){
        this.name = name;
        this.sku = sku;
        this.health = health;
        this.image = image;
        this.weakness = weakness;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
        this.m4 = m4;
    }
}

//pokemon objects are created here
var charizard = new Pokemon("Charizard", 1, 150, "./assets/pngfind.com-charizard-sprite-png-4458716-min.png", ['electric', 'water', 'rock'], () => {return {name: "cut", damage: 30, type: "normal"}}, () => {return {name: "flamethrower", damage: 45, type: "fire"}}, () => {return {name: "dragon rage", damage: 70, type: "dragon"}}, () => {return {name: "rock slide", damage: 60, type: "rock"}});
var gyarados = new Pokemon("Gyarados", 2, 140, "./assets/oie_124642GgjIgslR.png", ['electric', 'rock'], () => {return {name: "tackle", damage: 30, type: "normal"}}, () => {return {name: "hydro pump", damage: 50, type: "water"}}, () => {return {name: "dragon rage", damage: 70, type: "dragon"}}, () => {return {name: "surf", damage: 45, type: "water"}})
var pikachu = new Pokemon("Pikachu", 3, 100, "./assets/pngegg-min.png", ['ground'], () => {return {name: "tackle", damage: 30, type: "normal"}}, () => {return {name: "thunder punch", damage: 40, type: "electric"}}, () => {return {name: "thunderbolt", damage: 60, type: "electric"}}, () => {return {name: "mud slap", damage: 50, type: "ground"}})
var bulbasaur = new Pokemon("Bulbasaur", 4, 90, "./assets/oie_3114387IdcZ76v-min.png", ['psychic', 'ice', 'flying', 'fire'], () => {return {name: "cut", damage: 30, type: "normal"}}, () => {return {name: "vine whip", damage: 35, type: "grass"}}, () => {return {name: "razor leaf", damage: 45, type: "grass"}}, () => {return {name: "mud slap", damage: 50, type: "ground"}})
var snivy = new Pokemon("Snivy", 5, 90, "./assets/oie_311958qE18ve9d-min.png", ['fire', 'flying', 'bug', 'poison', 'ice'], () => {return {name: "cut", damage: 30, type: "normal"}}, () => {return {name: "vine whip", damage: 35, type: "grass"}}, () => {return {name: "iron tail", damage: 50, type: "steel"}}, () => {return {name: "aerial ace", damage: 50, type: "flying"}})
var oshawott = new Pokemon("Oshawott", 6, 100, "./assets/oie_313026K2kMR96A-min.png", ['grass', 'electric'], () => {return {name: "tackle", damage: 35, type: "normal"}}, () => {return {name: "water gun", damage: 30, type: "water"}}, () => {return {name: "hydro pump", damage: 45, type: "water"}}, () => {return {name: "waterfall", damage: 50, type: "water"}})
var gardevoir = new Pokemon("Gardevoir", 7, 130, "./assets/oie_313648a0SRdygH-min.png", ['ghost', 'poison', 'steel'], () => {return {name: "psychic", damage: 40, type: "psychic"}}, () => {return {name: "moon blast", damage: 60, type: "fairy"}}, () => {return {name: "headbutt", damage: 30, type: "normal"}}, () => {return {name: "ice punch", damage: 40, type: "ice"}})
var sandile = new Pokemon("Sandile", 8, 100, "./assets/oie_314759NA9AC0wj-min.png", ['bug', 'fighting', 'ice', 'fairy', 'grass', 'water'], () => {return {name: "sand attack", damage: 40, type: "ground"}}, () => {return {name: "thrash", damage: 35, type: "normal"}}, () => {return {name: "earthquake", damage: 50, type: "ground"}}, () => {return {name: "crunch", damage: 40, type: "dark"}})
var gengar = new Pokemon("Gengar", 9, 110, "./assets/oie_32424F12LRtHU-min.png", ['ghost', 'dark', 'psychic'], () => {return {name: "mega punch", damage: 35, type: "normal"}}, () => {return {name: "seismic toss", damage: 45, type: "fighting"}}, () => {return {name: "lick", damage: 50, type: "ghost"}}, () => {return {name: "shadow claw", damage: 40, type: "ghost"}})
var lucario = new Pokemon("Lucario", 10, 120, "./assets/oie_32321HXZ8fgOb-min.png", ['fighting', 'fire', 'ground'], () => {return {name: "headbutt", damage: 35, type: "normal"}}, () => {return {name: "seismic toss", damage: 45, type: "fighting"}}, () => {return {name: "low kick", damage: 50, type: "fighting"}}, () => {return {name: "metal claw", damage: 45, type: "steel"}})
let pokemonChoices = [charizard, gyarados, pikachu, bulbasaur, snivy, oshawott, gardevoir, sandile, gengar, lucario];