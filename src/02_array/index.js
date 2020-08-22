export function union(...arr) {
    // 求数组的并集
    let all = [].concat(...arr)
    return [...new Set(all)]
}

export function intersection(...arr) {
    // 求数组的交集
    let all = union(...arr)
    let argumentList = Array.from(arguments)
    let intersection = all.filter(key => {
        let isInAll = argumentList.map(list => list.includes(key))
            .filter(flag => flag === false).length <= 0
        return isInAll
    })
    return intersection

}

export function difference(...arr) {
    // 求数组的差集
    let unionArr = union(...arr)
    let intersectionArr = intersection(...arr)
    let differenceArr = unionArr.filter(i => !intersectionArr.includes(i))
    return differenceArr
}

export const FLATTEN_STRATEGY_DEPTH = 'depth'
export const FLATTEN_STRATEGY_BREADTH = 'breadth'

export function flatten(arr, depth = 1, strategy = FLATTEN_STRATEGY_DEPTH) {
    // 打平数组, depth 是打平深度
    if (strategy === FLATTEN_STRATEGY_DEPTH) {
        return flattenDepthFirst(arr, depth)
    } else if (strategy === FLATTEN_STRATEGY_BREADTH) {
        return flattenBreadthFirst(arr, depth)
    }
}

function flattenDepthFirst(arr, depth) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (Array.isArray(item)) {
            flatten(item, 0, depth, result)
        } else {
            result.push(item)
        }
    }
    return result

    function flatten(arr, curDepth, targetDepth, result) {
        if (curDepth === targetDepth || Object.getPrototypeOf(arr) !== Array.prototype) {
            return result.push(arr)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i]
                if (Array.isArray(item)) {
                    flatten(arr[i], curDepth + 1, targetDepth, result)
                } else {
                    result.push(item)
                }
            }
        }
    }


}

function flattenBreadthFirst(arr, depth) {
    let result = arr
    for (let i = 0; i < depth; i++) {
        result = flatten(result)
    }
    return result
    function flatten(arr) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i]
            if (Array.isArray(item)) {
                result.push(...item)
            } else {
                result.push(item)
            }
        }
        return result
    }
}

