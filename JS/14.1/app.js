const numbers = [4, 5, 666, 2, 400, 11, 1,2, 3, 4, 5, 6, 7,8 , 8, 9,10];


let myarr = numbers.reduce((accumulator, currentVal)=> {
    return Math.max(accumulator , currentVal) }
    )
    console.log(myarr);
    
    let myarr2 = numbers.reduce((acc, cuu) => {
        if (cuu%2===0){
            return acc + cuu
        } return acc });
    console.log(myarr2);

    let myarr1 = numbers.reduce((accumulator, currentVal)=> {return accumulator + currentVal
    }) / numbers.length
    console.log(myarr1);