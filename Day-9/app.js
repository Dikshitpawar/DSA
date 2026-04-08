const prompt = require('prompt-sync')()

//Sum of array’s element
let size = Number(prompt("ENter the size"));
let arr = new Array(size);
let sum = 0;
for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt("Enter the element"));
    sum = sum + arr[i];
}
console.log("Sum" ,sum)



//Max element from array
let size = Number(prompt("ENter the size"));
let arr = new Array(size);
for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt("Enter the element"));
}
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }    
}
console.log("Max===>" , max);




//Second max element from array
let size = Number(prompt("ENter the size"));
let arr = new Array(size);
for(let i=0; i<arr.length; i++){
    arr[i] = Number(prompt("Enter the element"));
}
let max = Math.max(arr[0] , arr[1]);
let sMax = Math.min(arr[0] , arr[1]);
for(let i=2; i<arr.length; i++){
    if(arr[i]>max){
        sMax = max;
        max = arr[i];
    }
    else if(arr[i]>sMax){
        sMax = arr[i];
    }
}
console.log("Second maximun=====>" , sMax);




//Reverse the array
// METHOD 1
let arr = [1,2,3,4,5,6];
let temp = new Array(arr.length);
let i=0
for(let j=arr.length-1; j>=0; j--){
    temp[i] = arr[j];
    i++;
}
console.log(temp)


//METHOD 2
let arr = [1,2,3,4,5,6];
let i=0, j=arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr)





//All zeroes to left and all ones to right
let arr = [1,0,0,1,1,1,0,0,1];
let j=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]===0){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j++;
    }
}
console.log(arr)





//Array left Rotation by 1
let arr = [1,2,3,4,5,6];
let temp=arr[0];
for(let i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = temp
console.log(arr)






//Array left rotation by K elements

//METHOD 1
let arr = [1,2,3,4,5,6];
let k = Number(prompt("Enter the number"));
k = k % arr.length

for(let j=1; j<=k; j++){
let temp=arr[0];
for(let i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = temp
}
console.log(arr)



//METHOD 2
let arr = [1,2,3,4,5,6];
let k = Number(prompt("Enter the number"));
let temp = new Array(arr.length);
k = k % arr.length

for(let i=0; i<arr.length; i++){
    temp[i] = arr[(i+k)%arr.length]
}

console.log(temp)



//Linear Search an array - If element found print the index else -1
let arr = [12,54,33,41,88,7];
let element = Number(prompt("Enter a number"));
let result = findIndex(arr,element);
console.log("Index====>" , result)

function findIndex(arr, element){
    for(let i=0; i<arr.length; i++){
    if(arr[i] === element){
        return i
    }
    }
    return -1;
}
