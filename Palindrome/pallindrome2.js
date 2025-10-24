
/* 125. Valid Palindrome
Easy
Topics
premium lock icon
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. */

/* //myattempt
function isPalindrome(s) {
    let x = s.split();
    let arr = [];
    for (let i = 0; i < x.length; i++) {
        if (a <= x[i] <= z && 0 <= x[i] <= 9) {
            arr.push(x[i]);
        }
    }
    return arr == arr.reverse();
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); */

function isPalindrome(s) {
    // Step 1: Convert to lowercase and remove non-alphanumeric characters
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Step 2: Compare cleaned string with its reverse
    let reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}

// ✅ Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false
console.log(isPalindrome(" "));                              // true
