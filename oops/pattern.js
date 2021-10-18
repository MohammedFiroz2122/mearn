var pattern = "hhaaii hhooww"
var new_array = ""
//split

var words = pattern.split(" ")  //["hhaaii","hhooww"]
for (let word of words) {
    let st = new Set()
    for (let char of word) {
        st.add(char)
    }
        st.add(" ")
    for (let alphabets of st) {
        new_array+=alphabets


    }

}
console.log(new_array);
