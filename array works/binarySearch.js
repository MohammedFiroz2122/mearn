var arr=[20,40,90,10,5,70]//5,10,20,40,70,90
var low=0;upp=arr.length-1;//upp=5
var flag=0;
var element=70;
arr.sort((num1,num2)=>num1-num2)


while(low<=upp){//0<=5 3<=5
    var mid=Math.floor((low+upp)/2);//0+5/2=2 3+5/2=4
    if(element<arr[mid]){//70<20 70<70
        upp=mid-1;
        
    }
    else if(element>arr[mid]){//70>20 70>70
        low=mid+1;//l=3
        
    }
    else if(element==arr[mid]){
        flag=1;
        break;
    }
}
console.log(flag==0?"element not found":"element found");