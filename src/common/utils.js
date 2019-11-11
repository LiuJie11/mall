
//解决重新计算图片高度频繁防抖函数处理
export function  debounce(func,delay){
    let timer =null;
    return function(...args){
        if(timer) clearTimeout(timer)
       timer = setTimeout(() => {
            func.apply(this,args)
        }, delay);
    }
}