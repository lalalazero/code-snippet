import { fibonacci, fibonacciIterator, fibonacciCandy } from '../index'

describe('fibonacci', () => {
    test('fibonacci recursive test', () => {
        expect(fibonacci(0)).toEqual(1)
        expect(fibonacci(1)).toEqual(1)
        expect(fibonacci(2)).toEqual(2)
        expect(fibonacci(3)).toEqual(3)
        expect(fibonacci(4)).toEqual(5)
        expect(fibonacci(5)).toEqual(8)
    })

    test('fibonacci iterator test', () => {
        let iterator = fibonacciIterator()
        expect(iterator.next()).toEqual(1)
        expect(iterator.next()).toEqual(1)
        expect(iterator.next()).toEqual(2)
        expect(iterator.next()).toEqual(3)
        expect(iterator.next()).toEqual(5)
        expect(iterator.next()).toEqual(8)
    })

    test('fibonacci generator test', () => {
        let iterator = fibonacciCandy()
        expect(iterator.next().value).toEqual(1)
        expect(iterator.next().value).toEqual(1)
        expect(iterator.next().value).toEqual(2)
        expect(iterator.next().value).toEqual(3)
        expect(iterator.next().value).toEqual(5)
        expect(iterator.next().value).toEqual(8)
    })
})