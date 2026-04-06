//Guess the number

// let com = Math.floor(Math.random() * 100) + 1;
// let userInp;
// do{
//     userInp = Number(prompt("Enter a number between 1 to 100"));
//     if(isNaN(userInp)  || userInp<1  || userInp>100) {
//         console.log("Enter a valid input");
//         continue
//     }

//     if(userInp>com) console.log("to high, Try again.!")
//     else if(userInp<com) console.log("to low, Try gain.!");
//     else console.log("Congrats 🎉🎉 , The actual number is " , com);
// }while(com !== userInp);




//Calculator


// let userInput;
// do{
//     let num1 = Number(prompt("Enter a number 1"))
//     let num2 = Number(prompt("Enter a number 2"))
//     let opr = prompt("Enter a valid operator(+,-,*,/)");

//     switch(opr){
//         case '+' : console.log("Addition result is " , num1+num2);
//         break;
        
//         case '-' : console.log("Substraction result is " , num1-num2);
//         break;

//         case '*' : console.log("Multiplication result is " , num1*num2);
//         break;

//         case '/' : 
//         if(num2 != 0) console.log("Division result is " , num1/num2);
//         else console.log("Invalid answer")
//         break;

//         default: console.log("Invalid operator")
//     }

//     userInput = prompt("Do you want calculate again yes/no").toLowerCase();

// }while(userInput === 'yes')



//Project restruant

// let current;
// let orders = [];

// do {
//     console.log(`Welcome to our Delicious Restaurant
// Enter 1 for Starters
// Enter 2 for Main Course
// Enter 3 for Desserts
// Enter 4 for Beverages`);

//     let user = Number(prompt("Enter a number"));

//     switch (user) {

//         case 1: {
//             console.log(`1 Paneer Tikka
// 2 Veg Manchurian
// 3 Spring Rolls
// 4 French Fries
// 5 Tomato Soup`);

//             let starter = Number(prompt("Enter a number"));

//             switch (starter) {
//                 case 1: orders.push("Paneer Tikka"); break;
//                 case 2: orders.push("Veg Manchurian"); break;
//                 case 3: orders.push("Spring Rolls"); break;
//                 case 4: orders.push("French Fries"); break;
//                 case 5: orders.push("Tomato Soup"); break;
//                 default: console.log("Invalid input");
//             }
//             break;
//         }

//         case 2: {
//             console.log(`1 Butter Paneer
// 2 Shahi Paneer
// 3 Veg Biryani
// 4 Dal Tadka
// 5 Mix Veg Curry`);

//             let main = Number(prompt("Enter a number"));

//             switch (main) {
//                 case 1: orders.push("Butter Paneer"); break;
//                 case 2: orders.push("Shahi Paneer"); break;
//                 case 3: orders.push("Veg Biryani"); break;
//                 case 4: orders.push("Dal Tadka"); break;
//                 case 5: orders.push("Mix Veg Curry"); break;
//                 default: console.log("Invalid input");
//             }
//             break;
//         }

//         case 3: {
//             console.log(`1 Gulab Jamun
// 2 Rasmalai
// 3 Ice Cream
// 4 Chocolate Cake
// 5 Brownie`);

//             let dessert = Number(prompt("Enter a number"));

//             switch (dessert) {
//                 case 1: orders.push("Gulab Jamun"); break;
//                 case 2: orders.push("Rasmalai"); break;
//                 case 3: orders.push("Ice Cream"); break;
//                 case 4: orders.push("Chocolate Cake"); break;
//                 case 5: orders.push("Brownie"); break;
//                 default: console.log("Invalid input");
//             }
//             break;
//         }

//         case 4: {
//             console.log(`1 Cold Coffee
// 2 Mango Shake
// 3 Masala Chai
// 4 Lemon Soda
// 5 Lassi`);

//             let drink = Number(prompt("Enter a number"));

//             switch (drink) {
//                 case 1: orders.push("Cold Coffee"); break;
//                 case 2: orders.push("Mango Shake"); break;
//                 case 3: orders.push("Masala Chai"); break;
//                 case 4: orders.push("Lemon Soda"); break;
//                 case 5: orders.push("Lassi"); break;
//                 default: console.log("Invalid input");
//             }
//             break;
//         }

//         default:
//             console.log("Invalid input");
//     }

//     current = prompt("Do you want to order again? yes/no").toLowerCase();

// } while (current === "yes");

// console.log("Your Orders:", orders);