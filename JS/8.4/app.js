const array = ["Hello","Good Day","Your Welcome","hotdog","hamburgers"];

function objectdivider (arr) {

    let arr2 = arr.toString().toLowerCase().split('').reduce((op,inp)=>{
        if(op[inp]){
          op[inp]++
        } else {
          op[inp]=1
        }
        return op
      },{})
      return console.log(arr2);
};

objectdivider(array);