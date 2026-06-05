# DSA Day 15

## Problems Solved

### 1. Character Frequency Counter

Write a program to accept a string and print the frequency of each character present in the string.

#### Approach

* Create an empty object.
* Traverse the string character by character.
* If the character is not present in the object, initialize its count as `1`.
* Otherwise, increment its count.
* Print the final frequency object.

#### Example

Input:

```
hello
```

Output:

```
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
```

#### Time Complexity

* O(n)

#### Space Complexity

* O(k) where k is the number of unique characters.

---

### 2. Check Two Strings are Anagrams

Anagrams are words that have the same length and the same character frequency.

Examples:

* arc ↔ car
* state ↔ taste
* night ↔ thing

#### Approach

* First, compare the lengths of both strings.
* If lengths are different, they cannot be anagrams.
* Create a frequency array.
* Increment the count for each character of the first string.
* Decrement the count for each character of the second string.
* If every element in the frequency array becomes `0`, the strings are anagrams.

#### Example

Input:

```
state
taste
```

Output:

```
Both Strings are Anagrams
```

#### Time Complexity

* O(n)

#### Space Complexity

* O(1) (Fixed-size frequency array)


