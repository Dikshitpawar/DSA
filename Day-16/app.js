//Leetcode : 771 Jewels and Stones
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

let jewels = "aA";
let stones = "aAAbbbb";
let set = new Set(jewels);
let count = 0;
for (let i of stones) {
  if (set.has(i)) count++;
}
console.log(count);








//Leetcode : 1832 Check if the pangram or not

//Method : 1
let input = "thequickbrownfoxjumpsoverthelazydog";
let isPangram = true;
if (input.length < 26) {
  isPangram = false;
} else {
  let set = new Set(input);
  if (set.size < 26) isPangram = false;
}
if (isPangram) console.log("Sentence is pangram");
else console.log("Sentence is not pangram");


//Method : 2
let input = "thequickbrownfoxjumpsoverthelazydog";
let isPangram = true;
let arr = new Array(26).fill(0);
if (input.length < 26) {
  isPangram = false;
} else {
  for (let i = 0; i < input.length; i++) {
    let ascii = input.charCodeAt(i);
    arr[ascii - 97] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      isPangram = false;
      break;
    }
  }
}
if (isPangram) console.log("Sentence is pangram");
else console.log("Sentence is not pangram");









//Leetcode : 202 Happy Number

let n = 25;
let isHappy = true;
let set = new Set();

while (true) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem ** 2;
    n = Math.floor(n / 10);
  }
  if (sum === 1) {
    isHappy = true;
    break;
  }
  if (set.has(sum)) {
    isHappy = false;
    break;
  }
  set.add(sum);
  n = sum;
}
if (isHappy) console.log("Happy number");
else console.log("Not Happy number");
