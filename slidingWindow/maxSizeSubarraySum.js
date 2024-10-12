/*
209. Minimum Size Subarray Sum
Medium
Topics
Companies
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
*/

const minSubArrayLen = (target, nums) => {
  let lp = 0;
  let min = Infinity;
  let currSum = 0;
  for (let rp = 0; rp < nums.length; rp++) {
    currSum = currSum + nums[rp];
    while (currSum >= target) {
      min = Math.min(min, rp - lp + 1);
      currSum = currSum - nums[lp];
      lp++;
    }
  }
  if (min == Infinity) {
    return 0;
  }
  return min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
