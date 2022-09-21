const myStudents = [
    {
        firstName : 'Yael',
        grade : 100
    },
    {
        firstName : 'Amir',
        grade : 60
    },
    {
        firstName : 'Noam',
        grade : 80
    },
    {
        firstName : 'YaNir',
        grade : 95
    },
];

for (let i =0; i<myStudents.length; i++) {
    let student = myStudents[i];
    console.log (`${student.firstName} Got ${student.grade} on the exam`)
}
let sum = 0;
for (let i =0; i<myStudents.length; i++) {
    let student = myStudents[i];
    sum += student.grade
}
sum = sum/myStudents.length
console.log(sum)

