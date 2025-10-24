/* 

1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d--->var mergeAlternately = function (word1, word2) {
    let arr1 = word1.split('')
    let arr2 = word2.split('')
    let arr = [];
    if (arr1.length > arr2.length) {
        for (let i = 1; i < arr1.length; i++) {
            arr.push(arr1[i - 1]);
            arr.push(arr2[i]);
        }

    }
    else if (arr1.length < arr2.length) {
        for (let i = 1; i < arr2.length; i++) {
            arr.push(arr1[i - 1]);
            arr.push(arr2[i]);
        }
    }
    return arr.join('');
}
console.log(mergeAlternately("abc", "pqrstu")); */

var mergeAlternately = function (word1, word2) {
    let arr1 = word1.split('')
    let arr2 = word2.split('')
    let arr = [];
    if (arr1.length >= arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            arr.push(arr1[i]);
            arr.push(arr2[i]);
        }

    }
    else if (arr1.length <= arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            arr.push(arr1[i]);
            arr.push(arr2[i]);
        }
    }
    return arr.join('');
}

console.log(mergeAlternately("abc", "pqr"));     // Output: apbqcr
console.log(mergeAlternately("ab", "pqrs"));     // Output: apbqrs
console.log(mergeAlternately("abcd", "pq"));     // Output: apbqcd

//another way
/* 
var mergeAlternately = function (word1, word2) {
    let arr1 = word1.split('');
    let arr2 = word2.split('');
    let arr = [];
    let max = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < max; i++) {
        if (arr1[i] !== undefined) arr.push(arr1[i]);
        if (arr2[i] !== undefined) arr.push(arr2[i]);
    }

    return arr.join('');
}; */