// Search in Rotated Sorted Array
let arr = [4, 5, 6, 7, 0, 1, 2];
let target = 0;

function search(arr, tar) {
  // Time complexity O(logn)
  let st = 0;
  let end = arr.length - 1;

  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2); // Midpoint calculation
    if (arr[mid] == tar) {
      return mid;
    }

    if (arr[st] <= arr[mid]) {
      // Left sorted
      if (arr[st] <= tar && tar < arr[mid]) {
        end = mid - 1;
      } else {
        st = mid + 1;
      }
    } else {
      // Right sorted
      if (arr[mid] < tar && tar <= arr[end]) {
        st = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

search(arr, target);
