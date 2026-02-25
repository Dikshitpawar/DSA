//Calculate compound interest

// CP = A - p
// A = p*(1+r/100)^t

let p = Number(prompt("Enter a principle"))
let r = Number(prompt("Enter a rate"))
let t = Number(prompt("Enter a time"))

console.log(p*Math.pow(1+r/100 , t) - p)



//Generate OTP

console.log(Math.floor(Math.random()*9000 + 1000));



//Area of triangle by heron's formula
//formula is sqrt of s*(s-a)*(s-b)*(s-c)
//where is s = (a+b+c)/2   (Semi parameter)

let a = Number(prompt("Enter a number"))
let b = Number(prompt("Enter a number"))
let c = Number(prompt("Enter a number"))
if(a+b<=c || a+c<=b || b+c<=a){
    console.log("Not possible");
}
else{
let s = Math.floor((a+b+c)/2);
let ans = s*(s-a)*(s-b)*(s-c)
console.log("Area of triangle is", Math.sqrt(ans));
}



//Circumference of circle
let R = Number(prompt("Enter the radius"));
console.log(2*Math.PI*R);    