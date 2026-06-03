//Leetcode 867: Transpose matrix

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let row = matrix.length;
let col = matrix[0].length;
let ans = new Array(col);
for(let i=0; i<ans.length; i++){
    ans[i] = new Array(row);
}
for(let i=0; i<ans.length; i++){
    for(let j=0; j<ans[i].length; j++){
        ans[i][j] = matrix[j][i]
    }
}
console.log(ans)








//Leetcode 48: Rotate image

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

for(let i=0; i<matrix.length; i++){
    for(let j=i; j<matrix[i].length; j++){
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }
}
for(let i=0; i<matrix.length; i++){
    let s=0, e=matrix[i].length-1;
    while(s<e){
        let temp = matrix[i][s];
        matrix[i][s] = matrix[i][e];
        matrix[i][e] = temp;
        s++
        e--
    }
}
console.log(matrix)









// Leetcode 54 : Spiral matrix

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let row = matrix.length;
let col = matrix[0].length;
let ans = [];
let minr = 0,
  maxr = matrix.length - 1;
let minc = 0,
  maxc = matrix[0].length - 1;

while (ans.length < row * col) {
  let pointer = minc;
  while (pointer <= maxc) {
    ans.push(matrix[minr][pointer]);
    pointer++;
  }
  minr++;
  pointer = minr;
  while (pointer <= maxr) {
    ans.push(matrix[pointer][maxc]);
    pointer++;
  }
  maxc--;
  if (minr <= maxr) {
    pointer = maxc;
    while (pointer >= minc) {
      ans.push(matrix[maxr][pointer]);
      pointer--;
    }
    maxr--;
  }

  if (minc <= maxc) {
    pointer = maxr;
    while (pointer >= minr) {
      ans.push(matrix[pointer][minc]);
      pointer--;
    }
    minc++;
  }
}
console.log(ans);
