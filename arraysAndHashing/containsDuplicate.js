/*
Duplicate Integer
Solved 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true
Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/

const hasDuplicate = (nums) => {
  const uniqueSet = new Set();

  for (const number of nums) {
    if (uniqueSet.has(number)) {
      return true;
    }

    uniqueSet.add(number);
  }

  return false;
};
