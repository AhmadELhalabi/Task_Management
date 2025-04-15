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

function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0); // O(n) // array method 
    return total / grades.length; // O(1)
  }
  
  
function getLetterGrade(average) {
    if (average >= 90) return 'A'; // O(1)
    if (average >= 80) return 'B'; // O(1)
    if (average >= 70) return 'C'; // O(1)
    if (average >= 60) return 'D'; // O(1)
    return 'F'; // O(1)
}

function printAllStudents() {
    students.forEach(student => { // O(n) // array method 
      const avg = calculateAverage(student.grades); // O(n)
      const grade = getLetterGrade(avg); // O(1)
      console.log('---')
      console.log(`Name: ${student.name}`)
      console.log(`Grades: [${student.grades.join(', ')}]`); // O(1)
      console.log(`Average: ${avg.toFixed(2)}`); // O(1)
      console.log(`Letter Grade: ${grade}`); // O(1)
      console.log('---'); // O(1)
    });
  }

addStudent("Ahmad", 28, "Lebanon", [100, 100, 100]); // O(1)
addStudent("Bob", 20 , "Italy", [70, 68, 72]);   // O(1)
addStudent("John", 22, "span", [90, 85, 92]) // O(1)

printAllStudents();