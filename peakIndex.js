// Peak index in the mountain

let arr = [0, 3, 8, 9, 5, 2];

function peakIndex(arr) {
  let st = 1; // the verry first index can't be the peak.
  let end = arr.length - 2; // neither the last can be the peak.

  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2); // get the mid
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid - 1] < arr[mid]) {
      // right
      st = mid + 1;
    } else {
      // left
      end = mid - 1;
    }
  }
  return -1;
}

peakIndex(arr);
