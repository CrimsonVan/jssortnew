Array.prototype.threeSum = function () {
  let arr = this.bubbleSort();
  console.log("打印排序后数组", arr);
  let length = arr.length;
  let maxArr = arr.slice(length - 3, length);
  let res = maxArr[0] * maxArr[1] * maxArr[2];
  return res;
};
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }
  return this;
};
console.log("打印结果", [2, 1, 3, 3, 6, 7, 2, 11, 0].threeSum());
