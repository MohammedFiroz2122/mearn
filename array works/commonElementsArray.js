var arr1 = [10, 20, 21, 22];
var arr2 = [11, 12, 20, 21];
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
            console.log(arr1[i], arr2[j])
        }
    }
}

