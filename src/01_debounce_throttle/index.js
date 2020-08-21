export function debounce(time, fn){
    let timer
    return function(args){
        let context = this
        timer && clearTimeout(timer)
        timer = setTimeout(fn.apply(context, args), time)
    }
}

export function throttle(time, fn){
    let timer
    let cd = false
    return function(args){
        let context = this
        if(!cd){
            cd = true
            timer = setTimeout(function(){
                fn.apply(context, args)
                cd = false
            }, time)
        }
    }
}