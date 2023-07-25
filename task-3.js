// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const mostFreqElement = (arr) => {
  let itemsMap = {};
  let maxValue = 0;
  let maxCount = 0;

  for (let item of arr) {
    if (itemsMap[item] == null) {
      itemsMap[item] = 1;
    } else {
      itemsMap[item]++;
    }

    if (itemsMap[item] > maxCount) {
      maxValue = item;
      maxCount = itemsMap[item];
    }
  }
  return maxValue;
};

// For testing purposes
console.log(mostFreqElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
