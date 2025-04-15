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
    const total = grades.reduce((sum, grade) => sum + grade, 0); // O(n)
    return total / grades.length; // O(1)
  }
  
  
function getLetterGrade(average) {
    if (average >= 90) return 'A'; // O(1)
    if (average >= 80) return 'B'; // O(1)
    if (average >= 70) return 'C'; // O(1)
    if (average >= 60) return 'D'; // O(1)
    return 'F'; // O(1)
}