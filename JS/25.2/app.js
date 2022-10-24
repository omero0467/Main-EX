const obj = {
    name: 'anwar',
    printName: function(){
        console.log(this.name)
    },
    printNameDelayed(){
        setTimeout(this.printName.bind(obj),3000)
    }
}

obj.printNameDelayed()