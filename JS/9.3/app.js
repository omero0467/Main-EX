constfood = ["Noodle","Pasta","Ice-cream","Meat","Cucumber","Olives"];
constfood1 = ["Fries","Ice-cream","Pizza","Olives","Hamburgers"];

const compare = (a,b) => {
    let myArr = []
    for(let i=0; i<a.length; i++){
        for (let j=0; j<b.length; j++) {
            if (b[j]===a[i]) {
                myArr.push(a[i])
            }
        }
    }
    if (myArr.length === 0) {console.log(false);} else {

        console.log(myArr);
    }
}

compare(constfood1,constfood);