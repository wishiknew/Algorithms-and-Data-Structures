// Frequency Counter - areThereDuplicates
// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions: Time Complexity - O(n), Space Complexity - O(n)

function areThereDuplicates1(...args) {
  const obj = {};

  return args.some((arg) => {
    if (obj[arg]) return true;
    obj[arg] = 1;
  });
}

console.log(areThereDuplicates1(1, 2, 3, 4));

function areThereDuplicates(...args) {
  // check if there are args first of all
  if (!args.length) return false;

  // lookup object just like the count object, or a map
  const lookup = {};

  for (const item of args) {
    if (lookup[item]) return true;
    lookup[item] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates("a", "b", "c", "a")); // true
