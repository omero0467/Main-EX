

boom = (n) => {
    for (let i = 1; i<=n; i++) {
       if  ((i + '').includes(7) && i%7===0) {
                console.log('boom-boom')
       } else if (i%7===0) {
        console.log('boom')
       }
       else {
        console.log(i)
       }
    }
}
boom(20);
