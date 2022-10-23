function Pokemon (pokemonName, pokemonType,pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you ${this.name}`);
}

Pokemon.prototype.attack = function(num){
console.log(`${this.name} used ${this.attackList[num]}
`)}

const Charizard = new Pokemon ('Charizard','Fire',['Fire Lash','foo'])
console.log(Charizard);
