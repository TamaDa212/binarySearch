const nums = [0, 1, 4, 6, 8, 10, 12];

var search = function(nums, target) {
  const left = 0;
  const right = nums.length - 1;
    const binarySearch = (nums, target, left, right) => {
      const mid = Math.floor((left + right) / 2);

      if (target === nums[mid]) {
        return mid;
      } else if (right === left) {
        return -1;
      }

      if (target < nums[mid]) {
        return binarySearch(nums, target, left, mid);
      } else {
        return binarySearch(nums, target, mid + 1, right);
      }
    }
  return binarySearch(nums, target, left, right);
};

console.log(search(nums, 12));