// Single Element in Sorted Array

let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];

for (let i = 1; i <= arr.length; i++) {
  // time compexity O(n)
  if (arr[i - 1] != arr[i] && arr[i + 1] != arr[i]) {
    console.log(arr[i]);
  }
}
