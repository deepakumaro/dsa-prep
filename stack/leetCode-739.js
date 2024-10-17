/*
739. Daily Temperatures
Solved
Medium
Topics
Companies
Hint
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 

Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

var dailyTemperatures = function (temperatures) {
  const ans = Array(temperatures.length).fill(0);
  const stack = [];
  for (const index in temperatures) {
    while (
      stack.length !== 0 &&
      stack[stack.length - 1].temp < temperatures[index]
    ) {
      const temp = stack.pop();
      ans[temp.index] = index - temp.index;
    }

    stack.push({ temp: temperatures[index], index: index });
  }
  return ans;
};
