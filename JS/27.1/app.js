const isGreaterThan10 = (num) => {
    return new Promise((resolve,reject)=>{
        if (num>10) {
            resolve({status : 200});
        } else {
            reject({status : 404});
        }
    })
}

isGreaterThan10(11)
.then((res)=>{
    console.log(res.status);
    console.log('RESOLVED');
})
.catch(res=>{console.log('REJECTED', res.status);})
