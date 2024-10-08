/*
String Encode and Decode
Solved 
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

const encode = (str) => {
  let encodedString = "";
  for (const string of str) {
    encodedString += `${string.length}#${string}`;
  }
  return encodedString;
};

const decode = (str) => {
  let decodedString = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    const length = parseInt(str.substring(i, j), 10);
    i = j + 1;
    j = i + length;
    const string = str.substring(i, j);
    decodedString.push(string);
    i = j;
  }

  return decodedString;
};

console.log(decode(encode(["iron", "man", "hulk", "thor"])));
