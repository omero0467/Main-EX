const isString = (a, callback) => {
    function callback (x) {
        console.log(x);
    }
    if (typeof a === 'string') {
        callback(a)
    }
}

isString()

const firstWordUpperCase = (a, callback) => {
    let arr = a.split(' ');
    let firstWord = arr[0].toUpperCase();
    arr.splice(0,1, firstWord)
    callback = (x) => {
        arr = 
        x.join('-');
    }; callback(arr)
    console.log(arr);
}

firstWordUpperCase('Create your own function that will receive from one of its')