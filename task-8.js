// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallestNumber = (arr) => {
  if (arr.length < 2) {
    return arr[0];
  }

  let smallestNumber = Infinity;
  let secondSmallestNumber = Infinity;

  for (const num of arr) {
    if (num < smallestNumber) {
      secondSmallestNumber = smallestNumber;
      smallestNumber = num;
    } else if (num < secondSmallestNumber && num != smallestNumber) {
      secondSmallestNumber = num;
    }
  }

  if (secondSmallestNumber === Infinity) {
    return null;
  }

  return secondSmallestNumber;
};

// For testing purposes
console.log(findSecondSmallestNumber([4, 7, 3, 1, 8, 9, 2]));
