// var arr=[2,3,4,5,6,7]

// //maximum of an array

//  var res=arr.reduce((num1,num2)=>num1>num2?num1:num2)
//  console.log(res);

//  //sum of the array

//  var res=arr.reduce((num1,num2)=>num1+num2)
//  console.log(res);

//  //minimum of an array

//  var res=arr.reduce((num1,num2)=>num1<num2?num1:num2)
//  console.log(res);


 var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]
//highest price

var costly_products=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costly_products);

//low cost product

var cheap_products=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(cheap_products);

//find treat

var srch_item=products.find(item=>item[1]=="treat")
console.log(srch_item);

//item<20

var avail=products.some(item=>item[2]<20)
console.log(avail);

//forEach

//print products rs>30>

products.filter(item=>item[2]>30).forEach(name=>console.log(name))
    
