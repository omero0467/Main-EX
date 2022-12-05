function multiply (a,b) {
    if(b){return a*b}
    
    return function(c){
        return c*a
    }
}

const double = multiply(4)
const res = double(11)

console.log(res);