async function userFightButtons() {
    await getCurrentPokemon();
    let button1 = await document.getElementById('attack1').innerHTML = user.currentPokemon[0].m1.name;
}
userFightButtons()
console.log(user.currentPokemon[0].m1.name)