const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = function(nums, target) {
    const left = 0;
    const rigth = nums.length - 1;
    let mid;

    while (left < rigth) {
        mid = Math.round((rigth - left) / 2) + left;
    }

    if (target === nums[mid]) {
        return mid;
    } else if (target < nums[mid]) {
        return rigth = mid - 1;
    } else {
        left = mid + 1;
    }
    return -1; // если нет target в параметрах функции
}

console.log(search(array, 9));