function findMissingNumber(nums) {
    const n = nums.length;
    
    //claculate the expectedSum 
    let expectedSum = 0;
    for (let i = 0; i <= n; i++) {
        expectedSum += i; 
    }

    //claculate the actualSum 
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i]; 
    }
    
    // Calculate the missing number and return it
    return expectedSum - actualSum;
}

// Examples:
const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); 

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); 

const nums3 = [0, 1];
console.log(findMissingNumber(nums3));
