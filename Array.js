// Revers an array

function reerseArray(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
}
const arr = [1, 2, 3, 4, 5];
reerseArray(arr);
console.log(arr);

// ---------------&----------------------------
// WAF to print all the unique value in an array.

let uniqueArr = [1, 2, 3, 1, 2, 3, 4, 5];
let countArr = {};
uniqueArr.forEach((num) => {
  countArr[num] = (countArr[num] || 0) + 1;
});
// If countMap[num] is undefined, the || 0 ensures it returns 0 (this is the default value for a number that hasn't been counted yet).

// If countMap[num] is already defined (the number num has appeared before), it keeps its current value.
// (countMap[num] || 0) + 1 This increments the count of num by 1.
const uniqueElement = Object.keys(countArr)
  .filter((key) => countArr[key] === 1)
  .map(Number);
console.log(uniqueElement);

//-----------------&-------------------
// Sub Array

// kadane's algorithm

// 1.Initialization:
// maxSum: Initialize to the smallest possible value (e.g., Number.MIN_SAFE_INTEGER or a very large negative number).
// curSum: Initialize to 0, to represent the sum of the current subarray being evaluated.

// 2. Iterate Through the Array:
// For each element arr[i] in the array.
// Add the current element to curSum.
// curSum=curSum+arr[i].
// Update maxSum to be the larger of maxSum and curSum.
// maxSum=max(maxSum,curSum)
// If curSum becomes negative, reset it to 0. This is because any negative sum cannot contribute positively to future subarrays: if curSum<0, then set curSum=0
// 3. Output the Result: At the end of the loop, maxSum contains the maximum sum of a contiguous subarray.

let subArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const kadane = (arr) => {
  let curSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    maxSum = Math.max(curSum, maxSum);
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSum;
};
kadane(subArray);
