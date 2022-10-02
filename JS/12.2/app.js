const candyStore = 
{candies:
    [
    {name:"mint gum",id:"as12f",price: 2,amount: 2},
    {name:"twix",id:"5hd7y",price: 5,amount: 4},
    ],
    cashRegister: 200
}

//1------------------------------------------------------
    function getCandy (obj, id) {
        const findId = obj.find(candy => id === candy.name)
        return console.log(findId)
    }

    //test
    // getCandy(candyStore.candies, 'mint gum')
    //2------------------------------------------------------
    function getPrice(obj, id){
        const findId = obj.find(candy => id === candy.price)
        return console.log(findId)
    }
    //test
    getPrice(candyStore.candies, 5)


    //3------------------------------------------------------
    function addCandy (arr, id, name, price) {
        arr.splice(arr.length, 0,{name, id, price, amount:1})
    }

    // Test
    // addCandy(candyStore.candies, 'teami', 'asf5r', 3)
    // console.log(candyStore.candies)
//4
function buy(obj, id) {
    const findId = obj.candies.find(candy => id === candy.name);
    obj.candies[findId.amount--]
    obj.cashRegister += findId.price
}

buy(candyStore,'mint gum')
console.log(candyStore)