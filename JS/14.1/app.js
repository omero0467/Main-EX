const numbers = [4, 5, 666, 2, 400, 11, 1,2, 3, 4, 5, 6, 7,8 , 8, 9,10];


let myarr = numbers.reduce((accumulator, currentVal)=> {
    return Math.max(accumulator , currentVal) }
    )
    console.log(myarr);
    
    let myarr2 = numbers.reduce((acc, cuu) => cuu % 2 === 0
    ? {odd: acc.odd, even: acc.even + cuu}
    : {even: acc.even, odd: acc.odd+cuu},
  {even:0, odd:0});
    console.log(myarr2);

    let myarr1 = numbers.reduce((accumulator, currentVal)=> {
        return accumulator + currentVal
    }) / numbers.length
    console.log(myarr1);