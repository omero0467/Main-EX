const storm = {
    // add code here
    superPower: {
    Power:'flying'
},
    printSuperPower: printSuperPower
}
function printSuperPower() {
    console.log(this.superPower)
    ;}
// printSuperPower.call(storm)
storm.printSuperPower()
