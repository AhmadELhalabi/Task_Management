const students = []; //aray

function addStudent(name, age, country, grades) {
  const student = {
    name,
    age,
    country,
    grades
  };
  students.push(student); // O(1)
  greetStudent(student);  // O(1)
}

function greetStudent(student) {
    console.log(`Hello, my name is ${student.name}. I’m ${student.age} years old from ${student.country}.`); // O(1)
  }