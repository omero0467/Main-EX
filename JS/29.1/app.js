//     const getIDs = () =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve([532, 543, 753, 1, 5]);
//     }, 1500); });
// // Here we are fetching a recipe with a given Id.
// We are getting a recipe as an object once consumed.
    // const getRecipe = (recipeID) => {
    // return new Promise((resolve, reject) => {
    // setTimeout((ID) => { const recipe = {
    //         title: "Fresh tomato pasta",
    //         publisher: "Pinchas Hodadad",
    //     };
    //     resolve(`${ID}: ${recipe.title}`);
    //     },1500,recipeID);
    // }); };
// Here we are consuming the promise.
// Getting the Ids, then getting a recipe with the id in the index 2.

const getIDs = () =>
new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
}, 1500); });

 function getRecipe (recipeID) {
    return new Promise((resolve, reject) => {
    setTimeout((ID) => { const recipe = {
            title: "Fresh tomato pasta",
            publisher: "Pinchas Hodadad",
          };
          resolve(`${ID}: ${recipe.title}`);
        },1500,recipeID);
    }); };

    
async function callFuncs () {
    const res1= await getIDs()
    const res2 = await getRecipe(res1[2])
    console.log(res2)
}

callFuncs()