const storm = {
    // add code here
    superPower: {
    Power:'flying',
    change: () => {
    this.Power='runing'}
},
    // printSuperPower: printSuperPower
}
// function printSuperPower() {
//     console.log(this.superPower)
//     ;}
// printSuperPower.call(storm)
// storm.printSuperPower()
storm.superPower.change()
console.log(storm)