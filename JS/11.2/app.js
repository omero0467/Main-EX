const myArray = []
function pushNum() {
    for (let i = 1; i <= 20; i++) {
        myArray.push(i)
    }
}

pushNum();
console.log(myArray);

// -------------------------------------------------.1-----------------------------------------
function doubleValues(arr) {
    const arr2 = arr.map((element) => {
        return element * 2
    });
    return arr2
}
console.log(doubleValues(myArray));

// -------------------------------------------------.2-----------------------------------------
function onlyEvenValues(arr) {
    const arr2 = arr.map((element, i) => {
        if (element % 2 === 0) {
            return (element)
        }
    }).filter(el => { if (el !== undefined) { return el } });
    return arr2
}

console.log(
    onlyEvenValues(myArray));
    // -------------------------------------------------.3-----------------------------------------
    
    
    function showFirstAndLast(arr) {
        const newArr = [];
        newArr.push(arr[0].toString())
        newArr.push(arr[arr.length - 1].toString())
        return newArr
    }
    
    console.log(
        showFirstAndLast(myArray)
        );
        
        // -------------------------------------------------.4-----------------------------------------
        function vowelCount(str) {
            let splitArr = str.split("");
            let obj = {};
            const vowels = "aeiou";
            splitArr.forEach(letter => {
                let lowerCasedLetter = letter.toLowerCase()
                if (vowels.indexOf(lowerCasedLetter) !== -1) {
                    if (obj[lowerCasedLetter]) {
                        obj[lowerCasedLetter]++;
                    } else {
                        obj[lowerCasedLetter] = 1;
                    }
                }
            });
            return obj;
        }
        
        console.log(vowelCount('asdasdfdfsef'));
        
        // -------------------------------------------------.5-----------------------------------------
        function capitalize (str) {
            let arr = str.split(' ')
            arr = arr.map(el=>{
                if (typeof el ==='string') {return el.toUpperCase()}
            });
            return arr
        }
        
        console.log(capitalize('awdafd asdasd'))
        
        // -------------------------------------------------.6-----------------------------------------
        function shiftLetters (str) {
            arr = str.split('')
            arr = arr.map((el)=> {
                el = el.toLowerCase();
                let modCharCode = (el.charCodeAt(el)+1);
               return el = String.fromCharCode(modCharCode);
            });
            arr = arr.join('')
            return arr
        }
        console.log(shiftLetters('amds'));
        // -------------------------------------------------.7-----------------------------------------
        function swapCase (str) {
            let arr = str.split(' ')
            arr = arr.map((el, i)=>{
                if (typeof el ==='string'&& i%2 !== 0) {return el.toUpperCase()}
                return el
            }).join(' ');
            return arr
        }
        
        console.log(swapCase('awdafd asdasd'))