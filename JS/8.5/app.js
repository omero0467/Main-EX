const swap = (obj) => {
    const swapped = Object.entries(obj).map(
        ([key, value]) => ({[value]: key})
      );
    
      return Object.assign({}, ...swapped)
} 
const Book2 = {
    author : 'J.K Rollin',
    'publishing year' : 1997,
    name : 'Harry Potter',
}

console.log(swap(Book2))