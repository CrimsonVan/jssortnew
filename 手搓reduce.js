Array.prototype.myReduce=function(func,init){
   let res=init?init:0
   for(let i=0;i<this.length;i++){
       res=func(res,this[i])
   }
   return res
}
let arr1=[1,2,3]
let res=[1,2,3].myReduce(
    (pre,cur)=>{
        return (pre + cur)*2+1
    },1
)
let res2=[1,2,3].reduce(
    (pre,cur)=>{

            return (pre + cur)*2+1
        
       
    },1
)
// console.log('测试reduce',res,res2);
//'script start' 'async2 end' 'Promise' 'script end' 'async1 end' 'promise1' 'promise2' 'setTimeout'
console.log('script start')

async function async1() {
await async2()
console.log('async1 end')
}
async function async2() {
console.log('async2 end')
}
async1()

setTimeout(function() {
console.log('setTimeout')
}, 0)

new Promise(resolve => {
console.log('Promise')
resolve()
})
.then(function() {
console.log('promise1')
})
.then(function() {
console.log('promise2')
})

console.log('script end')
