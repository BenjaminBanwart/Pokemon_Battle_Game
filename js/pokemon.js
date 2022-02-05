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
var charizard = new Pokemon("Charizard", 1, 150, "./assets/pngfind.com-charizard-sprite-png-4458716-min.png", ['electric', 'water', 'rock'], {name: "cut", damage: 30, type: "normal"}, {name: "flamethrower", damage: 45, type: "fire"}, {name: "dragon rage", damage: 70, type: "dragon"}, {name: "rock slide", damage: 60, type: "rock"});
var gyarados = new Pokemon("Gyarados", 2, 140, "./assets/oie_124642GgjIgslR.png", ['electric', 'rock'], {name: "tackle", damage: 30, type: "normal"}, {name: "hydro pump", damage: 50, type: "water"}, {name: "dragon rage", damage: 70, type: "dragon"}, {name: "surf", damage: 45, type: "water"})
var pikachu = new Pokemon("Pikachu", 3, 100, "./assets/pngegg-min.png", ['ground'], {name: "tackle", damage: 30, type: "normal"}, {name: "thunder punch", damage: 40, type: "electric"}, {name: "thunderbolt", damage: 60, type: "electric"}, {name: "mud slap", damage: 50, type: "ground"})
var bulbasaur = new Pokemon("Bulbasaur", 4, 90, "./assets/oie_3114387IdcZ76v-min.png", ['psychic', 'ice', 'flying', 'fire'], {name: "cut", damage: 30, type: "normal"}, {name: "vine whip", damage: 35, type: "grass"}, {name: "razor leaf", damage: 45, type: "grass"}, {name: "mud slap", damage: 50, type: "ground"})
var snivy = new Pokemon("Snivy", 5, 90, "./assets/oie_311958qE18ve9d-min.png", ['fire', 'flying', 'bug', 'poison', 'ice'], {name: "cut", damage: 30, type: "normal"}, {name: "vine whip", damage: 35, type: "grass"}, {name: "iron tail", damage: 50, type: "steel"}, {name: "aerial ace", damage: 50, type: "flying"})
var oshawott = new Pokemon("Oshawott", 6, 100, "./assets/oie_313026K2kMR96A-min.png", ['grass', 'electric'], {name: "tackle", damage: 35, type: "normal"}, {name: "water gun", damage: 30, type: "water"}, {name: "hydro pump", damage: 45, type: "water"}, {name: "waterfall", damage: 50, type: "water"})
var gardevoir = new Pokemon("Gardevoir", 7, 130, "./assets/oie_313648a0SRdygH-min.png", ['ghost', 'poison', 'steel'], {name: "psychic", damage: 40, type: "psychic"}, {name: "moon blast", damage: 60, type: "fairy"}, {name: "headbutt", damage: 30, type: "normal"}, {name: "ice punch", damage: 40, type: "ice"})
var sandile = new Pokemon("Sandile", 8, 100, "./assets/oie_314759NA9AC0wj-min.png", ['bug', 'fighting', 'ice', 'fairy', 'grass', 'water'], {name: "sand attack", damage: 40, type: "ground"}, {name: "thrash", damage: 35, type: "normal"}, {name: "earthquake", damage: 50, type: "ground"}, {name: "crunch", damage: 40, type: "dark"})
var gengar = new Pokemon("Gengar", 9, 110, "./assets/oie_32424F12LRtHU-min.png", ['ghost', 'dark', 'psychic'], {name: "mega punch", damage: 35, type: "normal"}, {name: "seismic toss", damage: 45, type: "fighting"}, {name: "lick", damage: 50, type: "ghost"}, {name: "shadow claw", damage: 40, type: "ghost"})
var lucario = new Pokemon("Lucario", 10, 120, "./assets/oie_32321HXZ8fgOb-min.png", ['fighting', 'fire', 'ground'], {name: "headbutt", damage: 35, type: "normal"}, {name: "seismic toss", damage: 45, type: "fighting"}, {name: "low kick", damage: 50, type: "fighting"}, {name: "metal claw", damage: 45, type: "steel"})
let pokemonChoices = [charizard, gyarados, pikachu, bulbasaur, snivy, oshawott, gardevoir, sandile, gengar, lucario];