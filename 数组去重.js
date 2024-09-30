//1.利用遍历和indexof
const arr = [
  1,
  4,
  9,
  0,
  3,
  2,
  72,
  2,
  2,
  undefined,
  null,
  undefined,
  null,
  NaN,
  NaN,
];
function removeSame(arr) {
  let arr1 = [];
  arr.forEach((item) => {
    if (arr1.indexOf(item) === -1) {
      arr1.push(item);
    }
  });
  return arr1;
}
Array.prototype.unique = function () {
  let map = new Map();
  let result = [];
  for (let item of this) {
    if (!map.has(item)) {
      map.set(item, true);
      result.push(item);
    }
  }
  return result;
};
console.log("打印测试数组去重", removeSame(arr));
console.log("打印测试挂载到原型上的方法数组去重", arr.unique());

//2.利用遍历和map.has
function removeSame2(arr) {
  const map = new Map();
  const arr1 = [];
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, true);
      arr1.push(item);
    }
  });
  return arr1;
}
console.log("打印测试map数组去重", removeSame2(arr));

//3.利用reduce去重
Array.prototype.myReduceUniqule = function () {
  return this.reduce(
    (sum, cur) => (sum.includes(cur) ? sum : [...sum, cur]),
    []
  );
};
console.log("测试reduce实现数组去重", arr.myReduceUniqule());
//start middle end 5 1 2 3 6
console.log("start");
setTimeout(() => {
  console.log("1");

  new Promise((resolve) => {
    console.log("2");
    resolve();
  }).then(() => {
    console.log("3");
  });
}, 0);
new Promise((resolve, reject) => {
  console.log("middle");
  reject();
})
  .then(() => {
    console.log("4,草泥马");
  })
  .catch(() => {
    console.log("5");
    setTimeout(() => {
      console.log("6");
    }, 0);
  });

console.log("end");
