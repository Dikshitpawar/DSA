# Day 13 - Matrix Problems

Today I solved 3 important matrix-based problems from LeetCode.

## Problems Solved

1. LeetCode 867 - Transpose Matrix
2. LeetCode 48 - Rotate Image
3. LeetCode 54 - Spiral Matrix

---

## 1. Transpose Matrix

### Approach
- Create a new matrix with size `col x row`.
- Traverse the original matrix.
- Put `matrix[j][i]` into `ans[i][j]`.

### Complexity
- Time Complexity: `O(row * col)`
- Space Complexity: `O(row * col)`

---

## 2. Rotate Image

### Approach
To rotate the matrix 90 degrees clockwise:

1. Transpose the matrix.
2. Reverse each row.

This modifies the matrix in-place.

### Complexity
- Time Complexity: `O(n²)`
- Space Complexity: `O(1)`

---

## 3. Spiral Matrix

### Approach
Used four boundaries:

- `minr` → starting row
- `maxr` → ending row
- `minc` → starting column
- `maxc` → ending column

Traversal order:

1. Left to Right
2. Top to Bottom
3. Right to Left
4. Bottom to Top

After every traversal, boundaries are updated.

### Complexity
- Time Complexity: `O(row * col)`
- Space Complexity: `O(row * col)`


