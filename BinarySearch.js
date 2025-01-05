// Binary search Algorithm

let arr = [-1, 0, 3, 4, 5, 9, 12];
let target = 12;
function binarySearch(arr, tar) {
  let st = 0;
  let end = arr.length - 1;
  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);
    if (tar > arr[mid]) {
      st = mid + 1; // 2nd hlf
    } else if (tar < arr[mid]) {
      end = mid - 1; // 1st half
    } else {
      return mid;
    }
  }
  return -1;
}

let ans = binarySearch(arr, target);
console.log(arr[ans]);

// mid = st + (end - st) /2
