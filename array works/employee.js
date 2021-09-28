var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1999,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]


//print number of employees
// console.log(employees.length);


//print no of developers
// var count=0;
// for (let employee of employees){
//     if(employee[3]=="developer"){
//         count++;
//     }
// }
// console.log(`no of developer is ${count}`);


//print exp of each employee
for(let employee of employees){
    console.log("exp",employee[5]-employee[4]);
}



//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~TOMORROW'S WORK (Friday,24)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//print highest salary
var high_salary=0;{}
for(let employee of employees){
    if(high_salary<employee[2]){
        high_salary=employee[2]
    }
}
console.log("max salary=",high_salary);



//print lowest salary
var low_salary=employees[0][2];
for(let employee of employees){
    if(low_salary>employee[2]){
        low_salary=employee[2]
    }
}
console.log("lowest salary=",low_salary);




//print name of developer who is taking highest salary
//print name of highest exp employee
//print total sum of salary group by developers
var developers=employees.filter(emp=>emp[3]=="developer")
console.log(developers);

//
var developers_name=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
console.log(developers_name);

//print developer names whose exp > 6years
var exp_developer=employees.filter((emp=>emp[3]=="developer" & (emp[5]-emp[4]>6))).map(emp=>(emp[1]))
console.log(exp_developer);

//add bonus of 5000rs for all developers

var developer_salary=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
console.log(developer_salary);