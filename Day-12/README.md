# Day 12 - 2D Arrays in JavaScript

## Overview

Today's practice focused on working with **2D Arrays (Jagged Arrays)** in JavaScript. The programs demonstrate how to create dynamic multidimensional arrays, take user input, traverse arrays using nested loops, and perform operations on matrix diagonals.

## Programs Implemented

### 1. Dynamic 2D Array Creation

* Accepts the number of rows from the user.
* Allows different sizes for each inner array.
* Takes input for every element.
* Displays the complete 2D array.

### 2. Diagonal Sum of a 2D Array

* Calculates the **Left (Primary) Diagonal Sum**.
* Calculates the **Right (Secondary) Diagonal Sum**.
* Uses nested loops and conditional checks:

  * `i === j` for the primary diagonal.
  * `i + j === n - 1` for the secondary diagonal.

## Concepts Practiced

* Arrays
* 2D Arrays
* Jagged Arrays
* Nested Loops
* User Input with `prompt-sync`
* Matrix Traversal
* Diagonal Sum Logic

## Sample Input

Array Size: 3

Inner Array Sizes:
3 3 3

Elements:
1 2 3
4 5 6
7 8 9

## Sample Output

Left Diagonal Sum: 15
Right Diagonal Sum: 15

## Learning Outcome

By completing these programs, I gained a better understanding of:

* Dynamic memory allocation using arrays.
* Traversing multidimensional arrays efficiently.
* Applying conditional logic while iterating through matrices.
* Solving basic matrix-related DSA problems in JavaScript.
