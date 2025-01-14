/* 
392. Is Subsequence
Solved
Easy
Topics
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
Seen this question in a real interview before?
1/5
Yes
No
Accepted
1.7M
Submissions
3.5M
Acceptance Rate
48.1%
Topics
Companies
Similar Questions
Discussion (182)
*/

var isSubsequence = function (s, t) {
  let sIdx = 0;
  let tIdx = 0;
  while (sIdx < s.length && tIdx < t.length) {
    if (s[sIdx] === t[tIdx]) {
      sIdx++;
      tIdx++;
    } else {
      tIdx++;
    }
  }
  return sIdx === s.length;
};
