// Product of array except self

// Solution I brute force.
let arr = [1, 2, 3, 4];
// the answer should be like this = [24,12,8,6] & can't use division
function producOfArray(arr) {
  // O(n^2) time Complexity and O(n) space Complexity.
  let n = arr.length;
  let ans = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j) {
        ans[i] *= arr[j];
      }
    }
  }
  return ans;
}

producOfArray(arr);

// Solution 2

function producOfArraySellf(arr) {
  // O(n) time Complexity and O(1) space Complexity.
  let n = arr.length;
  let ans = new Array(n).fill(1);

  // prefix
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] * arr[i - 1];
  }
  // suffix
  let suffix = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix *= arr[i + 1];
    ans[i] *= suffix;
  }
  return ans;
}

producOfArraySellf(arr);
