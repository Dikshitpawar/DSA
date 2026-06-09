# Day 16 - Sets

## Problems Solved

### 1. Jewels and Stones (LeetCode 771)

**Concepts Used:**

* Hash Set
* Membership Lookup

**Approach:**

* Store all jewel characters in a Set.
* Traverse the stones string.
* Count every stone that exists in the Set.

**Time Complexity:** O(n)
**Space Complexity:** O(k)

---

### 2. Check if the Sentence Is Pangram (LeetCode 1832)

#### Method 1: Using Set

**Concepts Used:**

* Hash Set
* Unique Character Counting

**Approach:**

* Add all characters of the sentence into a Set.
* If the Set size is 26, the sentence is a pangram.

**Time Complexity:** O(n)
**Space Complexity:** O(26)

#### Method 2: Using Frequency Array

**Concepts Used:**

* Character Hashing
* ASCII Values

**Approach:**

* Create an array of size 26 initialized with 0.
* Mark the presence of each character using its ASCII index.
* Check whether every alphabet appears at least once.

**Time Complexity:** O(n)
**Space Complexity:** O(26)

---

### 3. Happy Number (LeetCode 202)

**Concepts Used:**

* Hash Set
* Cycle Detection
* Number Manipulation

**Approach:**

* Repeatedly calculate the sum of squares of digits.
* Store previously seen sums in a Set.
* If the sum becomes 1, the number is happy.
* If a sum repeats, a cycle exists and the number is not happy.

**Time Complexity:** O(log n) per iteration
**Space Complexity:** O(log n)

