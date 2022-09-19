const grade = (num) => {
if (num <= 64) {
    return 'F'
}
else if (num >64 && num < 70) {
    return 'D'
}
else if (num >=70 && num < 80) {
    return 'C'
}
else if (num >= 80 && num < 90) {
    return 'B'
}
else if (num >= 90 && num <=100) {
    return 'A'
}

else {
    return "INVALID"
}
 
}

console.log(grade(101))