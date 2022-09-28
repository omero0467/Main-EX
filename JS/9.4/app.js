// function steps (num) {
//     let str = ''
//     for (let i=0; i<num; i++) {
//         str += '#'
//         console.log(str);
//     }
// }
function steps (n, i = 1) 
{ if (i > n) return;
     console.log('#'.repeat(i) + ' '.repeat(n - i));
      steps(n, i + 1); }

//       function steps (num) {
//         let str =''
//         for (let i=0; i<num; i++) {
//             str +='#';
//             // console.log(str)
//         }
        
//         for (let j=1; j<str.length; j++) {
//             if (j !== str.length){
//                 str = str +'a';
//             }
//         }
//         return console.log(str);
// }
steps(20)