function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  
  // Check if the original word is the same as the reversed word
  if (word === reversedWord) {
    return true;  // It's a palindrome
  } else {
    return false; // It's not a palindrome
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
