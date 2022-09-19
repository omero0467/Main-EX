const announce = () => {
    const average = (a, b, c,) => {
    let averageScore =(a+b+c)/3;
    return averageScore;
}
const Mike = average(89,120,103);
const John = average(116,94,123);
const Mary = average(97,134,105);

function iswinner (d, f, e){
    let winner
    if (d > f && e)
    {return winner = 'Mike'} 
    else if (f > d && e)
    { return winner = 'John'}
    else if (e > f && d)
    { return winner = 'Mary'}
    else { return winner ='its a tie'};
};
let winner = iswinner(Mike, John, Mary);

return `The winner is ${winner}`
}
console.log(announce());