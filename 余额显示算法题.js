console.log("测试node");
function cutNumber(nums) {
  let num = nums.toString();
  if (num.length <= 3) {
    return num;
  }
  let arr = [];
  for (let i = num.length - 1; i >= 0; i = i - 3) {
    let slice = num.slice(i - 2 < 0 ? 0 : i - 2, i + 1);
    arr.push(slice);
  }
  return arr.reverse().join();
}

console.log("测试手搓数字用逗号分割", cutNumber(13223112) + "元");
//a c f k g m b e
async function async1() {
  console.log("a");
  await async2();
  await async3();
  await async4();
  console.log("b");
}

async function async2() {
  console.log("c");
}
async function async3() {
  console.log("k");
}
async function async4() {
  console.log("m");
}
async1();
setTimeout(() => {
  console.log("e");
}, 0);
new Promise((resolve, reject) => {
  console.log("f");
  resolve();
}).then(() => {
  console.log("g");
});

function deepclone(obj) {
  if (obj instanceof Object !== true) {
    return obj;
  }

  if (Array.isArray(obj)) {
    let arr = [];
    for (let item of arr) {
      arr.push(deepclone(item));
    }
    return arr;
  }

  let result = {};
  for (let key in obj) {
    result[key] = deepclone(obj[key]);
  }
  return result;
}
const objtest = {
  age: 1,
  hobby: {
    sports: "篮球",
    entertainment: "娱乐",
  },
  dream: "吃",
};
const copied = deepclone(objtest);
console.log("打印修改前的深拷贝", copied);
objtest.hobby.enter = "杀";
console.log("打印修改后的深拷贝", copied);
const arr3 = [1, 2, 3];
arr3.push([4, 5, 6]);
console.log("打印arr3", arr3);
() => {
  console.log("你好自动函数");
};
