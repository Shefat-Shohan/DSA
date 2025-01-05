/*
You have to allocate books to M number of students so that the maximum number of pages allocated to a student is minimum.

-- Each book should be allocated to a student.
-- Each student has to be allocated at lesat one book.
-- Allotment should be in contigious order.

Calculate and return that minimum possible number.
return -1 if a valid assignment is not possible.
*/

let arr = [2, 1, 3, 4];
let n = arr.length; 
let m = 2; // number of student

function isValid(m, n, arr, maximumAllowedPages) {
  let students = 1,
    pages = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > maximumAllowedPages) {
      return false;
    }``
    if (pages + arr[i] <= maximumAllowedPages) {
      pages += arr[i];
    } else {
      students++;
      pages = arr[i];
    }
  }
  return students > m ? false : true;
}

function allocatedBook(arr, n, m) {
  if (m > n) {
    return -1;
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  let ans = -1;
  let st = 1,
    end = sum; // range of possible answer.

  while (st <= end) {
    let mid = Math.floor(st + (end - st) / 2);
    if (isValid(m, n, arr, mid)) {
      // valid
      ans = mid;
      end = mid - 1;
    } else {
      // invalid;
      st = mid + 1;
    }
  }
  return ans;
}

allocatedBook(arr, n, m);
