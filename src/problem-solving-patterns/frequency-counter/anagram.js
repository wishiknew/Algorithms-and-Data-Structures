// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema, formed from iceman.
// Note: You may assume the string contains only lowercase alphabets.

console.log(undefined || 2);
console.log(undefined || 3);
// Time Complexity - O(n)
function isValidAnagram(one, two) {
  return (
    JSON.stringify(Array.from(one).sort()) ===
    JSON.stringify(Array.from(two).sort())
  );
}

function validAnagram(word1, word2) {
  // anagrams cant have different lengths
  if (word1.length !== word2.length) return false;
  // what is this obj for?
  const obj = {};
  // got my ans. something like a character count map
  // for..of iterates through the values
  for (const char of word1) {
    // if char already there, increment and store
    obj[char] = ++obj[char] || 1;
  }

  for (const char of word2) {
    // now that we already have a char count map, 
    // we need to reduce that count as we iterate
    if (obj[char]) obj[char]--;
    // if at all it doesnt match exit.
    else return false;
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
