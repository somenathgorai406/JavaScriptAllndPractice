/* 9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome. */
//way 1
/* const isPalindrome = function (m) {
    let x = m.toString(); //important to convert number to string as input can be number or string
    for (let i = 0; i < (x.length - 1) / 2; i++) {
        if (x[i] === x[x.length - 1 - i]) {
            return true;
        }
        else return false;
    }
}; */
//way 2
/* const isPalindrome = function (m) {
    let x = m.toString();
    return x == + x.split('').reverse().join('');
} */
//function 
function isPalindrome(m) {
    let x = m.toString();
    return x == x.split('').reverse().join('');
}

console.log(isPalindrome(121));
console.log(isPalindrome("1212345234"));
console.log(isPalindrome('123454321'));

