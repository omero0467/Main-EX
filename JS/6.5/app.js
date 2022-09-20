const Object1 = {
    message: "Hey"
}

const newArr = []

newArr.fill(Object1, 0, 100)

const newArr2 = Array.from({length:101}, (v, i) => i);

const MyArr = Object.values(Object1)

console.log(newArr2);


console.log(MyArr)

console.log(Array.isArray(newArr2));

const myArr2 = Array.from(newArr)
const myArr3 = newArr