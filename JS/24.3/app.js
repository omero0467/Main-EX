const myarr = ['apple','banana','tree',11]

Array.prototype.Myfilter =function(callback) {
    let filtered = []
    for (let i=0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            filtered.push(this[i])
        }
        
    }
    return filtered
}

const myFiltered = myarr.Myfilter((e,i,a)=>{
    return a[i-1]
})
console.log(myFiltered);

Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i],i,this)){
            return this[i]
        }
}
}

const found2 = myarr.myFind((e,i,a)=>{
    return e >10
})

console.log(found2);

// Array.prototype.myReduce = function(accumelator) {
//     for (let i = 0; i < this.length; i++) {
//         this[i];
//     }
// }