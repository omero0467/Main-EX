const isLeap =(n)=> {
    if ((0 == n % 4) && (0 != n % 100) || (0 == n % 400)) {
        console.log(n + ' is a leap n');
    } else {
        console.log(n + ' is not a leap n');
    }
}

isLeap(n);