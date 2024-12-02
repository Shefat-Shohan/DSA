// Container with most water

// Algorithm
// Initialize Pointers and Variables:

// Set lp (left pointer) to the start of the array (index 0).
// Set rp (right pointer) to the end of the array (last index).
// Set maxWater to 0 to store the maximum water area encountered.
// Iterate While lp < rp:

// Compute the width of the container as the difference between rp and lp (rp - lp).
// Compute the height of the container as the minimum of waterLevel[lp] and waterLevel[rp].
// Compute the current water area as width * height.
// Update maxWater to the maximum value between maxWater and current water area.
// Adjust the Pointers:

// Compare waterLevel[lp] and waterLevel[rp]:
// If waterLevel[lp] < waterLevel[rp], increment lp (move left pointer right).
// Otherwise, decrement rp (move right pointer left).
// Return the Result:

// After exiting the loop, return the value of maxWater, which contains the maximum trapped water area.

let waterLevel = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxWater(waterLevel) {
  let lp = 0,
    rp = waterLevel.length - 1,
    maxWater = 0;
  while (lp < rp) {
    let whidth = rp - lp;
    let height = Math.min(waterLevel[lp], waterLevel[rp]);
    let currentWater = whidth * height;
    maxWater = Math.max(maxWater, currentWater);
    waterLevel[lp] < waterLevel[rp] ? lp++ : rp--;
  }
  return maxWater;
}

maxWater(waterLevel);
