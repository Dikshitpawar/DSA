# Day 10 - Median of Two Sorted Arrays

## 🧩 Problem

Given two sorted arrays `nums1` and `nums2` of sizes `m` and `n`, return the median of the two sorted arrays.

The overall run time complexity should ideally be **O(log (m+n))**.

---

## 💡 Approach (Brute Force - Merge Method)

* We merge both sorted arrays into a single array.
* This is similar to the merge step in merge sort.
* After merging:

  * If the total length is **odd**, the middle element is the median.
  * If the total length is **even**, the median is the average of the two middle elements.

---

## ⚙️ Steps

1. Use two pointers (`i` for nums1, `j` for nums2)
2. Compare elements and insert the smaller one into the merged array
3. Add remaining elements from either array
4. Compute the median from the merged array

---

## ⏱️ Complexity

* **Time Complexity:** O(n + m)
* **Space Complexity:** O(n + m)

---

## 📈 Example

**Input:**

```
nums1 = [1,2]
nums2 = [3,4]
```

**Output:**

```
2.5
```

---
