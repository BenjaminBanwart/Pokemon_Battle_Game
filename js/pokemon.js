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
var charizard = new Pokemon("Charizard", 1, 350, "./assets/pngfind.com-charizard-sprite-png-4458716-min.png", ['electric', 'water', 'rock'], {name: "cut", damage: 30, type: "normal", sku: 1}, {name: "flamethrower", damage: 45, type: "fire", sku: 2}, {name: "dragon rage", damage: 70, type: "dragon", sku: 3}, {name: "rock slide", damage: 60, type: "rock", sku: 4});
var gyarados = new Pokemon("Gyarados", 2, 330, "./assets/oie_124642GgjIgslR.png", ['electric', 'rock'], {name: "tackle", damage: 30, type: "normal", sku: 1}, {name: "hydro pump", damage: 50, type: "water", sku: 2}, {name: "dragon rage", damage: 70, type: "dragon", sku: 3}, {name: "surf", damage: 45, type: "water", sku: 4})
var pikachu = new Pokemon("Pikachu", 3, 180, "./assets/pngegg-min.png", ['ground'], {name: "tackle", damage: 30, type: "normal", sku: 1}, {name: "thunder punch", damage: 40, type: "electric", sku: 2}, {name: "thunderbolt", damage: 60, type: "electric", sku: 3}, {name: "mud slap", damage: 50, type: "ground", sku: 4})
var bulbasaur = new Pokemon("Bulbasaur", 4, 150, "./assets/oie_3114387IdcZ76v-min.png", ['psychic', 'ice', 'flying', 'fire'], {name: "cut", damage: 30, type: "normal", sku: 1}, {name: "vine whip", damage: 35, type: "grass", sku: 2}, {name: "razor leaf", damage: 45, type: "grass", sku: 3}, {name: "mud slap", damage: 50, type: "ground", sku: 4})
var snivy = new Pokemon("Snivy", 5, 150, "./assets/oie_311958qE18ve9d-min.png", ['fire', 'flying', 'bug', 'poison', 'ice'], {name: "cut", damage: 30, type: "normal", sku: 1}, {name: "vine whip", damage: 35, type: "grass", sku: 2}, {name: "iron tail", damage: 50, type: "steel", sku: 3}, {name: "aerial ace", damage: 50, type: "flying", sku: 4})
var oshawott = new Pokemon("Oshawott", 6, 160, "./assets/oie_313026K2kMR96A-min.png", ['grass', 'electric'], {name: "tackle", damage: 35, type: "normal", sku: 1}, {name: "water gun", damage: 30, type: "water", sku: 2}, {name: "hydro pump", damage: 45, type: "water", sku: 3}, {name: "waterfall", damage: 50, type: "water", sku: 4})
var gardevoir = new Pokemon("Gardevoir", 7, 270, "./assets/oie_313648a0SRdygH-min.png", ['ghost', 'poison', 'steel'], {name: "psychic", damage: 40, type: "psychic"}, {name: "moon blast", damage: 60, type: "fairy"}, {name: "headbutt", damage: 30, type: "normal"}, {name: "ice punch", damage: 40, type: "ice"})
var sandile = new Pokemon("Sandile", 8, 170, "./assets/oie_314759NA9AC0wj-min.png", ['bug', 'fighting', 'ice', 'fairy', 'grass', 'water'], {name: "sand attack", damage: 40, type: "ground", sku: 1}, {name: "thrash", damage: 35, type: "normal", sku: 2}, {name: "earthquake", damage: 50, type: "ground", sku: 3}, {name: "crunch", damage: 40, type: "dark", sku: 4})
var gengar = new Pokemon("Gengar", 9, 250, "./assets/oie_32424F12LRtHU-min.png", ['ghost', 'dark', 'psychic'], {name: "mega punch", damage: 35, type: "normal", sku: 1}, {name: "seismic toss", damage: 45, type: "fighting", sku: 2}, {name: "lick", damage: 50, type: "ghost", sku: 3}, {name: "shadow claw", damage: 40, type: "ghost", sku: 4})
var lucario = new Pokemon("Lucario", 10, 320, "./assets/oie_32321HXZ8fgOb-min.png", ['fighting', 'fire', 'ground'], {name: "headbutt", damage: 35, type: "normal", sku: 1}, {name: "seismic toss", damage: 45, type: "fighting", sku: 2}, {name: "low kick", damage: 50, type: "fighting", sku: 3}, {name: "metal claw", damage: 45, type: "steel", sku: 4})
let pokemonChoices = [charizard, gyarados, pikachu, bulbasaur, snivy, oshawott, gardevoir, sandile, gengar, lucario];
