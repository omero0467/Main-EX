const percentageOfWorld1 = (a) => {
    return (a/ 7900)*100;
}

const china = percentageOfWorld1(1441);
const India = percentageOfWorld1(1326);
const usa = percentageOfWorld1(332);

console.log(usa, India, china);