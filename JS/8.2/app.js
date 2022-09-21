const myCountry = {
    country : 'Vietnam',
    capital : 'Seol',
    language : 'Vietnamese',
    population : 96.20,
    neighboring : "China, Cambodia, Laus",
    isIsland() {
       return console.log(this.neighboring ?  false : true)},

    describe () {

        return console.log(`${this.country} has ${this.population} million people. thier native tongue is ${this.language}, they have ${this.neighboring} as neighbors and thier capital is called ${this.capital}`)

    }
}
myCountry.describe()

myCountry.isIsland()
