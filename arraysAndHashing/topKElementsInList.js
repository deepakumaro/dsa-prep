/*
Top K Elements in List
Solved 
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.

*/

const topKFrequent = (nums, k) => {
  const countMap = {};

  const frqArray = Array.from({ length: nums.length + 1 }, () => []);

  for (const number of nums) {
    countMap[number] = (countMap[number] || 0) + 1;
  }

  for (const key in countMap) {
    frqArray[countMap[key]].push(parseInt(key));
  }

  const result = [];

  for (let i = frqArray.length - 1; i > 0; i--) {
    for (const number of frqArray[i]) {
      result.push(number);

      if (result.length === k) {
        return result;
      }
    }
  }
};
