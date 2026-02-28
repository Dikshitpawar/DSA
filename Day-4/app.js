//Factorial of a number

let n1 = Number(prompt("Enter a nummber"))
let fact = 1;
for(let i=1; i<=n1; i++){
    fact *= i;
}
console.log("Factorial of" , n , "is" , fact);



//Print the sum of all even & odd numbers in a range seperately.

let n2 = Number(prompt("Enter a nummber"))
let evenSum=0 , oddSum=0;
for(let i=1; i<=n2; i++){
    if(i%2==0) evenSum += i;
    else oddSum += i;
}
console.log("Evensum is" , evenSum , "oddsum is" , oddSum);



//Print all the factors of a number.
//1]
let n3 = Number(prompt("Enter a nummber"))
for(let i=1; i<=n3; i++){
    if(n%i == 0){
        console.log(i);
    }
}

//2]
for(let i=1; i<=n3/2; i++){
    if(n%i == 0){
        console.log(i);
    }
}
console.log(n)



//Check if the number is Prime or not.
let n = Number(prompt("Enter a nummber"))
if(n<=1){
    console.log("Not prime")
}
else{
    let isPrime = true;
for(let i=2; i<=n/2; i++){
    if(n%i==0){
        isPrime = false
        break;
    }
}
if(isPrime) console.log("Prime number");
else console.log("Not prime")
}



//Write a program to take two inputs a, b & find the value of a raised to the power of b.
    //  Ex - a = 2, b = 5 
    //  OP - 2^5 = 32
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let ans = 1
for(let i=1; i<=b; i++){
    ans = ans * a;
}
console.log(ans)
