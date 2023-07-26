// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger = (romanNum) => {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanValue.length; i++) {
    const currentValue = romanValue[romanValue[i]];
    const nextValue = romanValue[romanValue[i + 1]];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }
  return result;
};

// For testing purpose
console.log(romanToInteger(IX));
