// Accept a string and print the frequency of each character
// present in the string


const prompt = require('prompt-sync')();

const str = prompt("Enter a string: ");
let obj = {};

for(let i of str){
    if(obj[i] === undefined){
        obj[i] = 1
    }else{
        obj[i] += 1
    }
}
console.log(obj)





// Check Two Strings are Anagram or Not
// Anagrams words have the same word length & same character count
// Examples of anagram words are arc and car, state and taste,
// night and thing etc.

const str1 = prompt("Enter a string 1: ")
const str2 = prompt("Enter a string 2: ")
let arr = new Array(123).fill(0);
let isAnagram = true
if(str1.length !== str2.length){
    isAnagram = false;
}
else{
    for(let i=0; i<str1.length; i++){
        let ascii = str1.charCodeAt(i);
        arr[ascii] += 1;
    }
    for(let i=0; i<str2.length; i++){
        let ascii = str2.charCodeAt(i);
        arr[ascii] -= 1;
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            isAnagram = false
            break
        }
    }
}
if(isAnagram) console.log("Both String are Anagrams")
else console.log("Not Anagram");