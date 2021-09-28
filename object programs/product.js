var product={
    p_code:100,
    name:"Dark fantasy",
    price:250,
    avail_qty:50
}

//print product name

console.log(product.name);

//update stock as current stock + 30
product.avail_qty+=30
console.log(product);
//chk for discount key is present
console.log("discount" in product);

//add discount:10%
product.discount="10%"
console.log(product);