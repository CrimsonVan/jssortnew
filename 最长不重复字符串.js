let str2 = "adadadcf";
function findLongestStr2(s) {
  let max = [];
  for (let i = 0; i < s.length; i++) {
    let arr = [s[i]];
    // console.log("打印str", str);
    for (let j = i + 1; j < s.length; j++) {
      if (arr.indexOf(s[j]) === -1) {
        arr.push(s[j]);
      } else {
        break;
      }
    }

    console.log("打印str", arr);

    if (arr.length > max.length) {
      max = arr;
    }
  }
  return max.length;
}
console.log("测试最长字符串长度为", findLongestStr2(str2));
function longStr2(s) {
  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) !== -1) {
      arr.splice(0, arr.indexOf(s[i]) + 1);
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max);
  }
  return max;
}
console.log("测试第二种最长字符串长度为", longStr2(str2));
function testFunc() {
  console.log("打印testFunc");
}

console.log("打印typeof", typeof testFunc);
