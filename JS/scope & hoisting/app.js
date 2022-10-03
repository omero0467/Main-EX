// -----------------block1--------------
// function funcA() {
//     console.log(a);//------------returns undefined
//     console.log(foo()); //-----------returns 2
//     var a = 1;
//     function foo() { return 2; }
// }
// funcA();
// -------------functionA return value undefined---------------

// // -----------------------block2------------------
// var fullName = 'John Doe';//-------irrelevent
// var obj = {
//     fullName: 'Colin Ihrig',
//     prop: {
//         fullName: 'Aurelio De Rosa',
//         getFullName: function () { return this.fullName; }//-------------------returns  'Aurelio'
//     }
// };
// console.log(obj.prop.getFullName());//----------prints Aurelio
// var test = obj.prop.getFullName;//----------return function
// console.log(test()); //prints Aurelio

// resault ----------------- aurilio
// resault ----------------- function
// resault ----------------- undefined

// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// funcB();
// console.log(typeof a);//-------- prints number
// console.log(typeof b);//-------- prints ???

//result ------ undefined
// ------------- number

// function funcC() {
//     console.log("1");
//   }

//   function funcC() {
//       console.log("2");
//     }

//     funcC();
//   funcC();//------prints 2

//   result ---------------prints 2*2

// function funcD1() {
//     d = 1;
//   }

//   funcD1();//-----------undefined
//   console.log(d);//----------prints 1

//   function funcD2() {
//     var e = 1;
//     return
//   }

//   funcD2();//-----------undefined
//   console.log(e);//--------prints 1

//   //result ------------e undefined

// function funcE() {
//     console.log("Value of f in local scope: ", f); //-------prints 1
//   }
//   console.log("Value of f in global scope: ", f);// -----undefined
//   var f = 1;
//   funcE();
// -------------------------------16.2-----------

// var x = 10;
// console.log(x);
// if (true) {
// var x = 20;
//   console.log(x);
// }
// console.log(x);

// var x;
// x = 10;
// function test(){
//   var x;
//   if (x > 20) {
// x = 50; }
//   console.log(x);
// }
// test();

// var x = 10;
// console.log(x);
// if (true) {
//   (function() {
//     var x = 20;
//     console.log(x);
// })(); }
// console.log(x);

// -----------------------------17.1-closure-------------
// var b = 1;
// function someFunction(number) {
// function otherFunction(input) {
//     return b;
// }
//     b = 5;
// return otherFunction;
// }
// var firstResult = someFunction();
// var result = firstResult();
// console.log(result);

// var a = 1;
// function b2() {
//   a = 10;
//   return;
//   function a() {}
// }
// b2();
// console.log(a);

let i;
for (i = 0; i < 3; i++) {
const log = () => { console.log(i);
}
  setTimeout(log, 100);
}
