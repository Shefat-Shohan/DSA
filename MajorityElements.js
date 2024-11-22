// Find the indices of two numbers in a sorted array that add up to a given target.
let elments = [2, 7, 11, 15];
let target = 9;

const pairSum = (nums, target) => {
  let ans = [];
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let pairSum = nums[i] + nums[j];
    if (pairSum > target) {
      j--;
    } else if (pairSum < target) {
      i++;
    } else {
      ans.push(i);
      ans.push(j);
      return ans;
    }
  }
  return ans;
};
pairSum(elments, target);

// Given an array nums of size n, return the majority element

let nums = [1, 2, 1, 2, 8, 2, 2];
// sort the array using array method
let sortedArray = nums.sort();

function majorityElem(arr) {
  // frequency count
  let frequecny = 1;
  let ans = [0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      frequecny++;
    } else {
      frequecny = 1;
      ans = arr[i];
    }
    // check frequency > n/2
    if (frequecny > Math.floor(arr.length / 2)) {
      return ans;
    }
  }
  return ans;
}
majorityElem(sortedArray);

//nlogn
