//1--------------------------------------------------------
//will Point to a global scope because console obj is global
//2--------------------------------------------------------
//will point to global bc of arrow Func
const myObj = {
    name:"Timmy",
    greet(){
    console.log(`Hello ${this.name}`);
},
};
myObj.greet();
'fixed by converting to method'
//3--------------------------------------------------------
const myFuncDec =function() {console.log(this);};
//will point to global bc inside function but if in 'strict' will error/ undefined
myFuncDec()
//4--------------------------------------------------------
//will point to global bc arrow func
const myFuncArrow = () => {console.log(this);};
myFuncArrow();
//5--------------------------------------------------------
document.querySelector(".element").addEventListener(()=> {console.log(this);});
//will log window obj fixed by using func decleration
