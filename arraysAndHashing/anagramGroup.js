/*
Anagram Groups
Solved 
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.

*/

const groupAnagrams = (strs) => {
  //make an anagramMap

  const hashMap = {};

  //loop the array

  for (const string of strs) {
    //make an array of 26 with 0 fill

    const letterCountArray = Array(26).fill(0);

    // count the char in each string and save in letter count array

    for (const char of string) {
      letterCountArray[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const keyForHashMap = letterCountArray.join("#");

    if (!hashMap[keyForHashMap]) {
      hashMap[keyForHashMap] = [];
    }

    hashMap[keyForHashMap].push(string);
  }

  return Object.values(hashMap);
};
