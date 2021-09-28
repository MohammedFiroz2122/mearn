//-------------------------------------------map-----------------------------------------------------
// var arr=[2,3,4,5,6]
// var squares=arr.map((num)=>num**2)
// var cubes=arr.map((num)=>num**3)
// console.log(cubes);

var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]
// print number of items in shop
console.log(products.length);
// print number of available items
var avail_items=products.filter(item=>item[3]>0)
console.log(avail_items);
// print all product names only
var res=products.map((product)=>product[1])
console.log(res);

//print out of stock product name
var out_stock_new=products.filter(item=>item[3]==0).map(item=>item[1])
console.log(out_stock_new);


//add offer of 5rs for all products whose stock > 50


var offer_product=products.filter(item=>item[3]>50).map(item=>[item[1],item[2]-5])
console.log(offer_product);

//sort employee wrt exp asc,desc
//sort emp wrt salary
//sort developers wrt to salary

//filter
//reduce
//sort
//some
//find
//forEach