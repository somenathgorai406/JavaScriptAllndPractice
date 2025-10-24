const isPalindrome = function (x) {
    let str = x.toLowerCase().replaceAll(/[^0-9a-z]/g, '');
    let str2 = str.split('').reverse().join('')
    return str === str2;

}

console.log(isPalindrome('asdfasdfasdf asf435sfg'))
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true