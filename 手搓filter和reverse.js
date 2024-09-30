console.log("启动filter");
Array.prototype.myFilter = function (func) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    func(this[i]) && res.push(this[i]);
  }
  return res;
};
console.log(
  "测试手写filter",
  [1, 2, 3].myFilter((item) => item >= 1)
);
Array.prototype.myReverse = function () {
  let times = Math.floor(this.length / 2);
  let length = this.length;
  for (let i = 0; i < times; i++) {
    [this[i], this[length - 1 - i]] = [this[length - 1 - i], this[i]];
  }
  return this;
};
console.log("测试手写reverse", [1, 2, 3, 4, 5].myReverse());
