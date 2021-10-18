// class Parent{
//     phone(){
//         console.log("i have iphone 7+");
//     }
// }

// class Child extends Parent{
//     phone(){
//         console.log("have 12 pro Max");
//     }
// }

// var child = new Child()
// child.phone()

class Parent{
    m1(){
        console.log("inside parent class");
    }
}

class Child extends Parent{
    m2(){
        super.m1()
        console.log("inside child class");
    }
}

class Subchild extends Child{
    m3(){
        super.m2()
        console.log("inside subchild class");
    }
}


var par=new Parent()
par.m1()

var chil=new Child()
chil.m1()
chil.m2()

var sub=new Subchild()
sub.m3()
sub.m2()