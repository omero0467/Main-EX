// const popsArr = [1423, 1567, 554, 600];
// const populationPrecentages = (array) => { 
//     const precentages = [];
//     for (let i=0; i<array.length; i++) {
//         precentages.push(popsArr[i]/7900*100);
//         }
//         return precentages
//     };
const popsArr = [1423, 1567, 554, 600];
const populationPrecentages = (array) => {
    const precentages = []
        array.forEach(element =>  {
            precentages.push(element / 7900 * 100)}
            )
    return precentages
};
console.log(populationPrecentages(popsArr))
