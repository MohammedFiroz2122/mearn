var num=2,low=8,upp=27;
for (let i=1;i<=upp;i++){
    let res=i**num;
    if(res>upp){
        break;
    }
    if((res>=low) & (res<=upp)){
        console.log(i);
    }
}