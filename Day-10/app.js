//leetcode no.4 -- Median of teo sorted array

let nums1 = [1, 2];
let nums2 = [3, 4];
let l1 = nums1.length, l2 = nums2.length;
let len = l1 + l2
let merged = new Array(len);
let a = 0, b = 0, k = 0;
while (a < l1 && b < l2) {
    if (nums1[a] <= nums2[b]) {
        merged[k] = nums1[a];
        k++;
        a++;
    }
    else {
        merged[k] = nums2[b];
        b++;
        k++;
    }
}
while (a < l1) {
    merged[k] = nums1[a];
    a++;
    k++;
}
while (b < l2) {
    merged[k] = nums2[b];
    b++;
    k++;
}
console.log(merged)

if (len % 2 != 0) {
    console.log("Meadin===> ", merged[Math.floor(len / 2)]);
}
else {
    let mid = Math.floor(len / 2);
    console.log("Meadin====>", (merged[mid - 1] + merged[mid]) / 2);
}
