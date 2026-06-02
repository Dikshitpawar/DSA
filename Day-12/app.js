
const prompt = require('prompt-sync')();

const size = Number(prompt("Enter the array size: "));
let arr = new Array(size);

for(let i=0; i<arr.length; i++){
    let innerSize = Number(prompt("Enter inner array size: "));
    arr[i] = new Array(innerSize);
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        arr[i][j] = Number(prompt(`Enter the element for arr[${i}][${j}]: `))
    }
}
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        process.stdout.write(`${arr[i][j]} `);
    }
    console.log();
}











//Diagonal sum of 2-D array

const size = Number(prompt("Enter the array size: "));
let arr = new Array(size);
let leftSum = 0, rightSum = 0;

for(let i=0; i<arr.length; i++){
    let innerSize = Number(prompt("Enter inner array size: "));
    arr[i] = new Array(innerSize);
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        arr[i][j] = Number(prompt(`Enter the element for arr[${i}][${j}]: `))
    }
}

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(i===j) leftSum += arr[i][j];
        if(i+j === arr.length-1) rightSum += arr[i][j];
    }
}
console.log("Left diagonal sum" , leftSum)
console.log("Right diagonal sum" , rightSum)





