var arr = [10, 11, 12, 13, 14, 11, ]
var flag = 0;
for (let num of arr) {
    if (num == 15) {
        flag++;
    }


}
flag==1?console.log("element found"):console.log("element not found");

