constlistOfNeighbours = [
    ["Canada","Mexico"],
    ["Spain"],
    ["Norway","Sweden","Russia"]
    ,];
// for (prop of constlistOfNeighbours) {
// console.log(`Neighbor: ${prop}`);
// }

for (let i=0; i<constlistOfNeighbours.length; i++) {
    let neighbour = constlistOfNeighbours[i]
    for (let j=0; j< neighbour.length; j++) {
        console.log(`Neighbor: ${neighbour[j]}`);
    }
}