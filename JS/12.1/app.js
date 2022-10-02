const library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The HungerGames", readingStatus: false }
];

function isReadable (arr){
    let str = ''
   let newArr= arr;
   for (let el of arr) {
    for (let prop in el){
        str += el[prop] + ' '
    }
    console.log (`${str}`),
    str = ''
   }
}

console.log(isReadable(library))
