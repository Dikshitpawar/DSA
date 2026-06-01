//Bubble Sort

// let arr = [1,4,3,2,10,9];
// for(let i=0; i<arr.length-1; i++){
//     for(let j=0; j<arr.length-i-1; j++){
//         if(arr[j+1]<arr[j]){
//             let temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr)








//Selection Sort

// let arr = [1,4,3,2,10,9];
// for(let i=0; i<arr.length-1; i++){
//     let small = i;
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j]<arr[small]){
//             small = j;
//         }
//     }
//     if(small != i){
//         let temp = arr[i];
//         arr[i] = arr[small];
//         arr[small] = temp;
//     }
// }
// console.log(arr)






//Insertion Sort
// let arr = [1,4,3,2,10,9];
// for(let i=1; i<arr.length; i++){
//     let key = arr[i];
//     let j = i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = key;
// }
// console.log(arr)