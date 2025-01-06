// Given are N boards of length of each given in the form of array, and M painter, such that each painter takes 1 unit of time to paint 1 unit of the board. The task is to finf the minimum time to paint all boards under the constraints that any painter will only paint continious section of boards.

let arr = [40, 30, 10, 20];
let n = arr.length; // number of boards
let m = 2; // number of painter

function isPossible(arr, n, m, maximumAllowedTime) {
  let painter = 1,
    time = 0;

  for (let i = 0; i < n; i++) {
    if (time + arr[i] <= maximumAllowedTime) {
      time += arr[i];
    } else {
      // add new painter
      painter++;
      time = arr[i];
    }
  }
  return painter <= m;
}

// minimum time to paint

function minTimeToPaint(arr, n, m) {
  let sum = 0,
    maxVal = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    maxVal = Math.max(maxVal, arr[i]);
  }
  let st = maxVal,
    end = sum,
    ans = -1;

  while (st < end) {
    let mid = Math.floor(st + (end - st) / 2);
    if (isPossible(arr, n, m, mid)) {
      // possible ans
      ans = mid;
      end = mid - 1;
    } else {
      st = mid + 1;
    }
  }
  return ans;
}

minTimeToPaint(arr, n, m);
