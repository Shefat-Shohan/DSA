// ----------Decimal to Binary Conversion---------------//

// Initialize a decimal number to convert
let decNum = 50;

// Function to convert a decimal number to binary
function decToBinary(decNum) {
  let ans = 0; // Stores the binary equivalent
  let power = 1; // Power to position binary digits correctly (1, 10, 100, etc.)

  // Loop until the decimal number becomes 0
  while (decNum > 0) {
    let reminder = decNum % 2; // Get the remainder (0 or 1)
    decNum = Math.floor(decNum / 2); // Divide the number by 2 and round down

    ans += reminder * power; // Add the binary digit at the correct position
    power *= 10; // Move to the next binary place value
  }

  return ans; // Return the final binary number
}

// Call the function with the given decimal number
decToBinary(decNum);

// -----------------  && -------------------

// Binary to Decimal Conversion

// Initialize a binary number to convert
let binary = 101;

// Function to convert a binary number to decimal
function binaryToDeciml(binNum) {
  let ans = 0; // Stores the decimal equivalent
  let power = 1; // Power to position the binary digit correctly (1, 2, 4, etc.)

  // Loop until the binary number becomes 0
  while (binNum > 0) {
    let reminder = binNum % 10; // Get the last binary digit (0 or 1)
    ans += reminder * power; // Add the decimal value of the binary digit

    binNum = Math.floor(binNum / 10); // Remove the last binary digit
    power *= 2; // Move to the next power of 2
  }

  return ans; // Return the final decimal number
}

// Call the function with the given binary number
binaryToDeciml(binary);
