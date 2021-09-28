//highest of array

var expenses=[12000,13000,14000,15000,11000,25000,17000,]
let highest=0;
for(let expense of expenses){
    if(expense>highest){
        highest=expense;
    }
}
    console.log(`highest is ${highest}`);

    //lowest of array
lowest=highest;
for(let expense of expenses){
    if(expense<lowest){//12000>0
        lowest=expense;//12000
    }
    
}
console.log(`lowest is ${lowest}`);

//no of month exceeds 15000

let flag=0;
for(let expense of expenses){
    if(expense>15000){
        flag++;
    }
}
console.log(`no of month exceeds 15000 is ${flag}`);

//avg of expenses

let avg=0;
let sum=0;
for(let expense of expenses){
    sum=sum+expense;
}
avg=sum/expenses.length;
console.log(`average is ${avg}`);

