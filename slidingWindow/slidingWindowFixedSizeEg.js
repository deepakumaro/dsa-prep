/*

this program prints out subarray of given window lenght 

for better understading of how sliding works

*/

// const printWindow = (nums, k) => {
//   let lp = 0;
//   let window = [];
//   for (let rp = 0; rp < nums.length; rp++) {
//     let windowSize = rp - lp + 1;
//     if (windowSize > k) {
//       window.shift();
//       lp++;
//     }
//     window.push(nums[rp]);
//     console.log(window);
//   }
// };

// console.log(printWindow([1, 2, 3, 4, 5, 6], 3));

const printWindow = (nums, k) => {
  let rp = k;
  let lp = 0;
  while (nums.length >= rp) {
    console.log(nums.slice(lp, rp));
    rp = rp + 1;
    lp = lp + 1;
  }
};

console.log(printWindow([1, 2, 3, 4, 5, 6], 4));
