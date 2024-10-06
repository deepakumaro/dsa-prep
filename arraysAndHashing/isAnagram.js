/*
Is Anagram
Solved 
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false


Constraints:

s and t consist of lowercase English letters

*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {};
  const tMap = {};

  for (const index in s) {
    sMap[s[index]] = (sMap[s[index]] || 0) + 1;
    tMap[t[index]] = (tMap[t[index]] || 0) + 1;
  }

  for (const key in sMap) {
    if (sMap[key] !== tMap[key]) {
      return false;
    }
  }

  return true;
};
