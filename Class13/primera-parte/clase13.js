class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
}

getInfo(){
    return `Nombre: ${this.name}, Edad: ${this.age}`;
}
}

const person1 = new Person("Juan", 30)

// console.log(person1.getInfo());


class Student extends Person{
    constructor (name, age, course){
        super(name, age)
        this.course = course
}

getStudentInfo(){
    return `${super.getInfo()}, Curso: ${this.course}`;
}
}

const student1 = new Student("Lucas", 30, "Curso")

console.log(student1.getStudentInfo())