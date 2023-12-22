function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  bcz there is 2 loops then it is The time complexity  O(n^2)
*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target)
    for each element i in array from start to second-to-last
        for each element j in array from one element after i to end
            if sum of elements i and j equals target
                return true (pair found)
    return false (no such pair found)
end function
*/

/*
  Add written explanation of your solution here
  It uses two nested loops to iterate through the array. The outer loop (i) goes through each element starting from the first one, while the inner loop (j) starts from the element right after i and goes to the end of the array.
For each pair of elements (array[i] and array[j]), it checks if their sum equals the target.
If a pair is found that adds up to the target, the function returns true immediately, indicating success.
If no such pair is found after checking all possible combinations, the function returns false, indicating that no two numbers in the array sum up to the target.
This approach ensures that every combination of two different numbers in the array is checked for the target sum.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
