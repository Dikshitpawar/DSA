let a = 10;
let b = 20;

// swap Method :- 1

let temp = a;
a = b; 
b= temp;
console.log(a , b);


//swap Method :- 2
a = a+b;
b = a-b;
a = a-b;
console.log(a ,b)


//swap Method :- 3
[a ,b] = [b , a]
console.log(a, b)