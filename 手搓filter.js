console.log('启动filter');
Array.prototype.myFilter=function(func){
  let res=[]
  for(let i=0;i<this.length;i++){
    func(this[i]) && res.push(this[i])
    
  }
  return res
}
console.log('测试手写filter',[1,2,3].myFilter(item => item>=1));
