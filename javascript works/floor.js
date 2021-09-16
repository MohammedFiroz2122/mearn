var num=123;
var res="";
while(num!=0){//123!=0 12!=0
    let digit=num%10;//123%10=3 12%10=2
    res+=digit;//3+2
    num=Math.floor(num/10);//12
}
console.log(res);