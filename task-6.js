// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const randomPassword = (len) => {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const specialChar = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const numbers = "0123456789";

  const allChar = upperCase + lowerCase + numbers + specialChar;

  let pass = "";

  for (let i = 0; i < len; i++) {
    const randIndex = Math.floor(Math.random() * allChar.length);
    pass += allChar[randIndex];
  }

  return pass;
};

// For testing purposes
console.log(randomPassword(8));
