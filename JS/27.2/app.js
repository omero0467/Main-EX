
// const makeAllCaps = (arr) =>{
    //     return new Promise((resolve,reject) =>{
        //         if (arr.every(i => typeof i === "string")){
            //             let arr2 = arr.map(element => {
                //                 return element.toUpperCase()
                //             });
                //             resolve({status :200, arr2})
                //         }
                //         else{ 
                    //             reject({status:'Not All Elements Are Strings'})
                    //         }
                    //     })
                    // }
                    // const sortWords = (arr) =>{
                        //     return arr.sort()
                        // }
                        
                        // // console.log(myarr2);
                        // makeAllCaps(myarr2)
                        // .then((res)=>{
                            //     console.log(sortWords(res.arr2));
                            //     console.log('Resolved',res.status);
                            // }).catch((res)=>{
                                //     console.log('Rejected',res.status)
                                // })
                                
const myarr = 'Call the functions once with an array of words and call it once'
const myarr2 =myarr.split(' ');
// myarr2.push(1)
const makeAllCaps = (arr) =>{
    return new Promise((resolve,reject) =>{
        if (arr.every(i => typeof i === "string")){
            let arr2 = arr.map(element => {
                return element.toUpperCase()
            });
            resolve({status :200, arr2})
        }
        else { 
            reject({status:404, mes:'Not All Elements Are Strings'})
        }
    })
}
const sortWord = (arr) =>{
    return new Promise((resolve,reject)=>{
    if (Array.isArray(arr) && arr.every(i => typeof i === "string")){
            resolve(arr.sort())
        }else {
            reject({status:404,mes:'Not an Array Or Element is not string'})
        }
    })
}
makeAllCaps(myarr2)
.then((res)=>{
    console.log('resolved')
    return sortWord(res.arr2);
}).then((arrRes)=>{
    console.log(arrRes)
}).catch((res)=>{
    console.log(res.status, res.mes)
})