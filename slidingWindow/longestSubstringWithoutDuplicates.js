/* 
Longest Substring Without Duplicates
Solved 
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
Constraints:

0 <= s.length <= 1000
s may consist of printable ASCII characters.
*/

const lengthOfLongestSubstring = (s) => {
  const set = new Set();
  let j = 0;
  let size = 0;

  for (const i in s) {
    while (set.has(s[i])) {
      set.delete(s[j]);
      j++;
    }
    size = Math.max(size, i - j + 1);
    set.add(s[i]);
  }
  return size;
};
