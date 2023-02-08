function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []
}


Student.prototype.setSubject = function (subjectName) {//Student.prototype.setSubject -не понимаю последовательность синтаксиса(((
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    console.log("У данного студента нет оценок. Возможно данный студент отчислен");
    return;
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function (...marks) {
  if (!this.marks || this.marks.length === 0) {//Гугл в помощь))) но не могли бы вы объяснить подробнее эту проверку?
        return 0;
    }
    
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

///с помощью гугла разобрался но все равно не до конца понимаю зачем здесь использовать контекст( мы ведь и так в prototype)???

const student1 = new Student("Alex", "male", 19);
const student2 = new Student("Ivan", "male", 20);
const student3 = new Student("Anna", "female", 22);

console.log(student1);
console.log(student2);
console.log(student3);
