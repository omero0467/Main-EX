import myVar from "./functions.js"
//To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.

// ES modules can be loaded dynamically via the import() function unlike require().

// you enable import by inserting type property of module to the package.json file


console.log(
    myVar.add(1,3),
    myVar.double(3),
    myVar.subtract(5,2)
);