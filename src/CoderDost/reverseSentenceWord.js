let sentence = "This is Javascript Code"
function reverseSentenceWord(sentence){
let split = sentence.split("")
let reverse = split.reverse();
let result = reverse.join("").split(" ").reverse()
return result.join(" ")
}
console.log(reverseSentenceWord(sentence))