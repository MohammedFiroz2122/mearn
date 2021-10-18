class Parent{
    phone(){
        console.log("have redmi note 10 pro max");
    }
}

class Child extends Parent{
    phone(){
        super.phone()
        console.log("have iphone 12 pro max");
    }
}

var child=new Child()
child.phone()