// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case "+":
      return (result = num1 + num2);

    case "-":
      return (result = num1 - num2);

    case "*":
      return (result = num1 * num2);

    case "/":
      return (result = num1 / num2);

    default:
      return console.log("Invalid operator");
  }
};

// For testing purposes
console.log(calculator(5, 2, "/"));
