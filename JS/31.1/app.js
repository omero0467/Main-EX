const person = document.querySelector('#person')

async function getAndCheckSWAPI(url ='https://swapi.dev/api/people/') {
    const response = (await fetch(url))
    if (!response.ok) {
        throw Error ('ERROR rejected with' ,response.status);
    }  const swapi10 = response.json()
return swapi10
}


async function getValuesFromSwapi() {   
    const peopleObj = await getAndCheckSWAPI()
    console.log(peopleObj)
for (let i = 0; i < peopleObj.results.length; i++) {
    const {name,height,homeworld,hair_color} = peopleObj.results[i];
    console.log({name,height,hair_color})
    let funcRes = 
    person.innerHTML += `<li>${name}, ${hair_color}, ${height}, ${ await getValuesFromHomeWorld(homeworld).then(({population})=>{return population})}
    ${ await getValuesFromHomeWorld(homeworld).then(({name})=>{return name})} 
    </li>`;
}
}
let homeOBJ;
async function getValuesFromHomeWorld(url){
    //?URL toString()?
        const homeworldObj = await getAndCheckSWAPI(url)
        return homeworldObj
}

getValuesFromSwapi()
// console.log( getValuesFromSwapi())

// function extract() {
//     const result = getValuesFromHomeWorld(this.homeworld.toString()).then(e=> {return e.name})
//  return result
// }