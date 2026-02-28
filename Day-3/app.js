//check the number is even or odd

// let a = Number(prompt("Enter a number"));
// if(a%2 == 0){
//     console.log("Given number is even")
// }else{
//     console.log("Given number is not even")
// }


//Accept a year and check if it is leap year or not

// let year = Number(prompt("Enter a year"));
// let isLeap = false
// if(year%4 == 0){
//     if(year%100 == 0){
//         if(year%400 == 0){
//             isLeap = true
//         }else{
//             isLeap = false;
//         }
//     }else{
//         isLeap = true;
//     }
// }else{
//     isLeap = false
// }

// console.log(isLeap ? "Leap year" : "Not Leap year");



//Shop Discount

// let amount = Number(prompt("Enter an amount"));
// let ans = 0;

// if(amount >=0 && amount<=5000 ){
//     ans = amount
// }
// else if(amount >5000 && amount<=7000 ){
//     ans = amount - Math.floor(amount*5/100)
// }
// else if(amount >7000 && amount<=9000 ){
//     ans = amount - Math.floor(amount*10/100)
// }
// else{
//     ans = amount - Math.floor(amount*20/100)
// }
// console.log("After discount your bill is" , ans);




// Bijli bill

// let unit = Number(prompt("Enter a unit"));
// let ans = 0
// if(unit>0 && unit<=100){
//     ans = unit * 4.2
// }
// else if(unit>100 && unit<=200){
//     ans = unit * 6
// }
// else if(unit>200 && unit<=400){
//     ans = unit * 8
// }
// else if(unit>400){
//     ans = unit *130
// }
// else{
//     console.log("Invalid input");
// }
// console.log("Your bill is", ans);