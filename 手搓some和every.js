Array.prototype.myEvery=function(func){
    for(let i=0;i<this.length;i++){
         if(!func(this[i])){
            return false
         }
    }
    return true
}

Array.prototype.mySome=function(func){
    for(let i=0;i<this.length;i++){
         if(func(this[i])){
            return true
         }
    }
    
}

console.log('测试some和every如下：');
console.log('测试mysome',[1,2,3].myEvery(item=>item>0))
console.log('测试mysome',[1,2,3].mySome(item=>item>2))