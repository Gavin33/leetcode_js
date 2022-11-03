/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    // sort nums
    nums.sort((a, b) => {
      return a - b;
    });
    // Go through each one by one.
    let pivot = -1;
    // store length of the list in a variable
    const lenNums = nums.length;
    let ans = [];
    // Check for triplicates, delete
    arr = nums.filter((i) => {
      pivot++;
      let bool = true;
      if (pivot >= 3) {
        if (
          (i === nums[pivot - 1] &&
            i === nums[pivot - 2] &&
            i === nums[pivot - 3]) ||
          (i === nums[pivot - 1] && i === nums[pivot - 2] && i != 0)
        ) {
          bool = false;
        }
      }
      if (pivot === lenNums - 1) {
        pivot = 0;
      }
      return bool;
    });
    const lenArr = arr.length;
    arr.map((i) => {
      // 1 number starts at the end of the array. Other is the number after the pivot
      let j = pivot + 1;
      let k = lenArr - 1;
      // Add all three together
      while (j < k && pivot != lenArr - 2) {
        if (pivot === 0 || i != arr[pivot - 1]) {
          sum = i + arr[j] + arr[k];
          // If 0, add to return and continue
          if (sum === 0) {
            let oldJ = arr[j];
            ans.push([i, arr[j], arr[k]]);
            // check for more possible answers, excluding duplicates
            while (arr[j] == oldJ) {
              j++;
            }
          }
          // If negative, add 1 to index of the smaller number
          else if (sum < 0) {
            j++;
          }
          // If positive, subtract 1 to index of bigger number
          else {
            k--;
          }
        } else break;
      }
      pivot++;
    });
    return ans;
  };
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
