// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency1(num1, num2) {
  //needs O(n) so I will just have to use for loops
  // nums are strings?
  const obj = {};
  Array.from(String(num1)).forEach((c) => {
    obj[c] = ++obj[c] || 1;
  });

  for (const char of String(num2)) {
    if (!obj[char]) return false;
    obj[char]--;
  }
  return true;
}

console.log(sameFrequency1(3242342, 3242342));

function sameFrequency(num1, num2) {
  const str1 = `${num1}`; // converting to string
  const str2 = `${num2}`;

  if (str1.length !== str2.length) return false;

  const obj = {};
  // same logic as for finding the anagrams
  for (const char of str1) {
    obj[char] = ++obj[char] || 1;
  }

  for (const char of str2) {
    if (!obj[char]) return false;
    obj[char]--;
  }

  return true;
}

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
