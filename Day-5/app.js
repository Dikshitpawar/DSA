// sum of digit

let n = Number(prompt("Enter a number"));
let sum1 = 0;
while(n>0){
    let rem = n%10;
    sum1 = sum1 + rem;
    n = Math.floor(n/10)
}
console.log(sum);



// reverse of number
let n1 = Number(prompt("Enter a number"));
let sum = 0;
while(n1>0){
    let rem = n1%10;
    sum = sum*10 +rem;
    n1 = Math.floor(n1/10); 
}
console.log(sum);


// strong number
// A Strong Number is a number whose sum of the factorial of its digits is equal to the number itself.

let n2 = Number(prompt("Enter any number"));
if(n2<0){
    console.log("Invalid number");
}
else{
    let sum = 0, temp = n2;
    while(n2>0){
        let rem = n2%10;
        let returnVal = factorial(rem);
        sum = sum + returnVal;
        n2 = Math.floor(n2/10);
    }
    if(sum === temp){
        console.log("Given number is strong number")
    }else{
        console.log("Given number is not strong number");
    }
}
function factorial(a){
    let fact = 1;
    for(let i=1; i<=a; i++){
        fact *= i;
    }
    return fact;
}




// Automorphic number
// An Automorphic Number is a number whose square ends with the number itself.

let n3 = Number(prompt("Enter a number"));
let count = 0, temp=n3, sq = n3*n3;
while(n3>0){
    count++;
    n = Math.floor(n3/10);
}

if(sq%Math.pow(10,count) === temp) console.log("Automorphic number");
else console.log("Not automorphic number");
