function primeBetween(low,upp){
    let res="";
    for(let i=low;i<upp;i++){
        let flag=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
            res+=" "+i;
        }
    }return res;
}
console.log(primeBetween(8,27));