
const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];




//1
function names(array) {
    const myArr = array.map((element) => {
        return console.log({ name: element.name })
    });
}
//Test1
names(data);


//2
const objBorn90sFromArr = (arr) => {
    const obj90sArr = [];
    arr.forEach((element) => {
        if (parseInt(element.birthday.split("-")[2]) < 1990) {
            obj90sArr.push(element);
        }
    });
    return obj90sArr;
};

//Test2
console.log(objBorn90sFromArr(data))

//3
const foodObjFromArr = (arr) => {
    let foodObj = {};
    arr.forEach((element) => {
        let meatsArr = element.favoriteFoods.meats;
        let fishArr = element.favoriteFoods.fish;
        let meatsAndFishArr = meatsArr.concat(fishArr);
        for (let i = 0; i < meatsAndFishArr.length; i++) {
            let prop = meatsAndFishArr[i];
            if (foodObj[prop] !== undefined) {
                foodObj[prop] += 1;
            } else {
                foodObj[prop] = 1;
            }
        }
    });
    return foodObj;
};
//Test3
foodObjFromArr(data);