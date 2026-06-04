//Accept a string from user and print its each character on a new line

const prompt = require('prompt-sync')();

const str = prompt("Enter a string: ");
for(let i of str){
    console.log(i)
}





// Accept a string and print it in reverse order

const str = prompt("Enter a string: ");
for(let i=str.length-1; i>=0; i--){
    console.log(str[i])
}





// Pallindromic String  using Two pointer algorithm

const str = prompt("Enter a string: ");
let arr = str.split("")
let s=0 , e=arr.length-1;
while(s<=e){
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
}
let reverse = arr.join("")
console.log(reverse)





// Toggle each alphabet of String
// In - AcgDfD Output - aCGdFd

let input = "AcgDfD";
let output = ""
for(let i=0; i<input.length; i++){
    let ascii = input.charCodeAt(i);
    if(ascii>=65 && ascii<=90){
        output += input[i].toLowerCase()
    }
    else{
        output += input[i].toUpperCase()
    }
}
console.log(output)







// Take an array of strings words and a String Prefix. Print the number of strings
// in words that contain pref as a prefix.
// Example - Input: words = ["pay","attention","practice","attend"], pref = "at" Output: 2

let words = ["pay","attention","practice","attend"];
let pref = "at";
let count = 0

for(let i=0; i<words.length; i++){
    if(words[i].startsWith(pref)){
        count++;
    }
}
console.log(count)





// 60. Capitalize first & last character of each word
// in the sentence and print the new sentence
// Ex - 	Hello bhai Kaise ho a
// HellO BhaI KaisE HO A

let str = "Hello bhai Kaise ho a";
let arr = str.split(" ")

for(let i=0; i<arr.length; i++){
    let word = arr[i]
    if(word.length === 1){
        arr[i] = word.toUpperCase();
    }else{
        let temp = word.charAt(0).toUpperCase() + word.slice(1,word.length-1) + word.charAt(word.length-1).toUpperCase();
        arr[i] = temp
    }
}
console.log(arr.join(" "))