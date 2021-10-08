class Student {
    constructor(rol, course, stud_name) {
        this.rol = rol,
            this.course = course,
            this.stud_name = stud_name
    }
    printStudent() {
        console.log(this.rol, this.course, this.stud_name);
    }
}


//var refname=classname()
var stud1 = new Student(7,"BCA","Pathu")
stud1.printStudent()

var stud2 = new Student(10, "BCA", "Sreelekshmi")
stud2.printStudent()