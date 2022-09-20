const people = ["Greg","Mary","Devon","James"];

for (let i = 0; i< people.length; i++){
    console.log(people[i])
}

people.shift()
people.pop()
people.splice(0,0,"Matt")
people.push('Omer')

for(let i=0; i<people.length; i++){
    console.log(people[i])
    if (people[i] === 'Mary') {
     break 
    }
 
}
const newArr = people.slice (2)
console.log(people.indexOf('Mary'))
console.log(people.indexOf('Foo'))

console.log(people)
console.log(newArr)
people.splice(2,2 ,'Devon',"James");
people.splice(0,1 ,"Greg");
people.splice(2,1 ,"Elizabeth", "Artie");
console.log(people)