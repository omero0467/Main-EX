function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function(){
   if(this.a===this.b&&this.b===this.c&&this.c===this.d){return true} return false
}

let mySq = new Square(4,4,4,4)
console.log(mySq);
console.log(mySq.isSquare())