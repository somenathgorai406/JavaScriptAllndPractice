//times limit exceeded due to infinite loop
function twoSum(nums, target) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; i < nums.length; j++)
            if (i !== j && nums[i] + nums[j] === target) {

                a = i;
                b = j;
            }
    }
    return [a, b];
}

/* function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
} */
console.log(twoSum([2, 7, 11, 15], 9));