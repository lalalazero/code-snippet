import { difference, union, intersection, flatten } from '../index'
import { FLATTEN_STRATEGY_BREADTH } from '../index'

describe('array', () => {
    test('difference', () => {
        let arr1 = [1, 2, 3]
        let arr2 = [2, 3, 4]
        let arr3 = []
        expect(difference(arr1, arr2)).toEqual([1, 4])
        expect(difference(arr1, arr3)).toEqual([1, 2, 3])
    })
    test('intersection', () => {
        let arr1 = [1, 2, 3]
        let arr2 = [2, 3, 4]
        let arr3 = [3, 4, 5]
        let arr4 = [3]
        expect(intersection(arr1, arr2)).toEqual([2, 3])
        expect(intersection(arr1, arr2, arr3)).toEqual([3])
        expect(intersection(arr1, arr2, arr3, arr4)).toEqual([3])
    })
    test('union', () => {
        let arr1 = [1, 2, 3]
        let arr2 = [2, 3, 4]
        expect(union(arr1, arr2)).toEqual([1, 2, 3, 4])
    })

    test('flatten, depth first', () => {
        let arr1 = [1, 2, [3, 4]]
        let arr2 = [1, 2, [3, [4, 5]]]
        let arr3 = [1, 2, [3, [4, 5, [6]]]]
        expect(flatten(arr1)).toEqual([1, 2, 3, 4])
        expect(flatten(arr2)).toEqual([1, 2, 3, [4, 5]])
        expect(flatten(arr2, 2)).toEqual([1, 2, 3, 4, 5])
        expect(flatten(arr3, 3)).toEqual([1, 2, 3, 4, 5, 6])
        let arr4 = ['a', [[{ x: 'x' }, 2]]]
        expect(flatten(arr4)).toEqual(['a', [{ x: 'x' }, 2]])
        expect(flatten(arr4, 2)).toEqual(['a', { x: 'x' }, 2])
    })
    test('flatten, breadth first', () => {
        let arr1 = [1, 2, [3, 4]]
        let arr2 = [1, 2, [3, [4, 5]]]
        let arr3 = [1, 2, [3, [4, 5, [6]]]]
        expect(flatten(arr1, 1, FLATTEN_STRATEGY_BREADTH)).toEqual([1, 2, 3, 4])
        expect(flatten(arr2, 1, FLATTEN_STRATEGY_BREADTH)).toEqual([1, 2, 3, [4, 5]])
        expect(flatten(arr2, 2, FLATTEN_STRATEGY_BREADTH)).toEqual([1, 2, 3, 4, 5])
        expect(flatten(arr3, 3, FLATTEN_STRATEGY_BREADTH)).toEqual([1, 2, 3, 4, 5, 6])
        let arr4 = ['a', [[{ x: 'x' }, 2]]]
        expect(flatten(arr4, 1, FLATTEN_STRATEGY_BREADTH)).toEqual(['a', [{ x: 'x' }, 2]])
        expect(flatten(arr4, 2, FLATTEN_STRATEGY_BREADTH)).toEqual(['a', { x: 'x' }, 2])
    })
})