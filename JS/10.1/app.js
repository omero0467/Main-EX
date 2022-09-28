const isString = (a, callback) => {
    if (typeof a === 'string') {
        callback(a)
        function callback (x) {
            console.log(x);
        }
    }
}

isString()

const firstWordUpperCase = (a, func) => {
    let arr = a.split(' ');
    arr[0] = arr[0].toUpperCase();
    func = (x) => {
        arr = x.join('-');}
    func(arr),
    console.log(arr);
}
firstWordUpperCase('The function should console log a step shape')