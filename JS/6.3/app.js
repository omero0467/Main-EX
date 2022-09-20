const arrLengths = (array) => {
    const newArr = [];
    for (let i=0; i<array.length; i++) {
        newArr.push(array[i].length)
    };
    return console.log(newArr);
}

const array1 = ["boo", "doooo", "hoo","ro"];

arrLengths(array1)