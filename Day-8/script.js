// Right Angle Traingle
// *
// * *
// * * *
// * * * *
// * * * * *

const prompt = require('prompt-sync')()
for(let i=0; i<5; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();
}



// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const n = prompt("Enter a number");
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j +" ");
    }
    console.log();
}


// A
// A B
// A B C
// A B C D
// A B C D E

let n = prompt("Enter a number");
for(let i=0 ; i<n; i++){
    let ascii = 65
    for(let j=0; j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii) + " ");
        ascii = ascii+1;
    }
    console.log()
}




// * * * * *
// * * * *
// * * *
// * *
// *

let n = prompt("Enetr a number");
for(let i=0; i<n; i++){
    for(let j=n; j>i; j--){
        process.stdout.write("* ")
    }
    console.log()
}






//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let n = prompt("Enter a number");
for(let i=0; i<n; i++){
    for(let j=0; j<n-i-1; j++){
        process.stdout.write("  ")
    }

    for(let k=0; k<=i; k++){
        process.stdout.write("* ")
    }
    console.log()
}







//   *       *
//    *     *
//     *   *
//      * *
//       *

let n = prompt("Enter a number");
for(let i=1; i<=n; i++){
    for(let j=1; j<=(n*2); j++){
        if(i===j  || (i+j)===(n*2)){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
    }
    console.log()
}





// *              *
//    *       *
//        *
//    *       *
// *               *


let n = prompt("Enter a number");
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(i===j || (i+j) === n-1){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
    }
    console.log()
}