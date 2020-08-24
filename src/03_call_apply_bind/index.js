export function myApply(context){
    context = context || window 
    let fnKey = Symbol()
    context[fnKey] = this 
    let args = [...arguments].slice(1)
    let res = context[fnKey](args)
    delete context[fnKey]
    return res
}

export function myBind(context, ...args) {
    let oldFn = this 
    return function newFn(...newFnArgs){
        if (this instanceof newFn) { // 是用 new 一个函数的方式调用的, 这个 this 是 new 出来的实例
            return new oldFn(...args, ...newFnArgs)
        }
        return oldFn.myApply(context, ...args, ...newFnArgs)
    }

}

export function myCall(context, ...args) {
    context = context || window 
    let fnKey = Symbol()
    context[fnKey] = this 
    let res = context[fnKey](...args)
    delete context[fnKey]
    return res
}