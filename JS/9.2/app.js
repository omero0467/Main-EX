const arrLengths = (array) => {
    const newArr = [];
    let i = 0;
    while (i<array.length) {
        let j = array[i]
        i++
        newArr.push(j.length)
    }
    // for (let i=0; i<array.length; i++) {
    //     newArr.push(array[i].length)
    // };
    return console.log(newArr);
}

const array1 = ["boo", "doooo", "hoo","ro"];

arrLengths(array1)