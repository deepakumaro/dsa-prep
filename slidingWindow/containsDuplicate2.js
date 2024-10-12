/*  

219. Contains Duplicate II
Easy
Topics
Companies
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

*/

const duplicate = (nums, k) => {
  const set = new Set();

  let lp = 0;

  for (let rp = 0; rp < nums.length; rp++) {
    const windowSize = rp - lp;

    if (windowSize > k) {
      set.delete(nums[lp]);
      lp++;
    }

    if (set.has(nums[rp])) {
      return true;
    }

    set.add(nums[rp]);
  }

  return false;
};

console.log(duplicate([1, 2, 3, 1], 3));
