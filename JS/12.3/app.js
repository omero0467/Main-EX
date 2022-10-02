const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },

    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],

  students: [
    { id: 10, name: "Jennifer", age: 20 },
    { id: 11, name: "Howard", age: 23 },
    { id: 12, name: "Old-Timmy", age: 86 },
    { id: 13, name: "Houston", age: 21 },
  ],
    assignTeachersSubject (id, subject) {
        const {teachers , students} = this
        const teacher = teachers.find(el => id === el.id)
        if (teacher.subjects.includes(subject) === false){
          return  teacher.subjects.push(subject)
        } return console.log('subject already exists');
    }
}


//-----------------------1--------------------
function findPerson (role, id) {
return role.find(el => id === el.id)
}

//test
// console.log(
//     findPerson(school.teachers, 1)
//     );
function assignStudent (id, subject){
    const student = school.students.find(el => id === el.id);
    const teacher = school.teachers.find(b => b.subjects.includes(subject))
    if (teacher.capacityLeft >=1){
        return teacher.students = student,
        teacher.capacityLeft -= 1
    } else {console.log('Sorry, no available teachers left')}
}
//test
// assignStudent(10, "history")
// assignStudent(11, "history")
// assignStudent(13, "history")
// console.log(school);

//3 test
// school.assignTeachersSubject(1, 'economy')
// console.log(school.teachers[0].subjects)