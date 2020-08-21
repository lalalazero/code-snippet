import { debounce, throttle } from '../index'

describe('01_debounce_throttle', () => {
    test('debounce', () => {
        jest.useFakeTimers()
        let input = document.createElement('input')
        let fn = jest.fn()
        let d_fn = debounce(300, fn)
        input.onchange = d_fn
        let event = new Event('change')
        input.dispatchEvent(event)
        input.dispatchEvent(event)
        input.dispatchEvent(event)
        expect(setTimeout).toHaveBeenCalledTimes(3)
        expect(jest.getTimerCount()).toEqual(1)
        jest.clearAllTimers()
    })
    
    test('throttle', () => {
        jest.useFakeTimers()
        let input = document.createElement('input')
        let fn = jest.fn()
        let d_fn = throttle(300, fn)
        input.onmousemove = d_fn
        let event = new Event('mousemove')
        input.dispatchEvent(event)
        input.dispatchEvent(event)
        input.dispatchEvent(event)
        expect(setTimeout).toHaveBeenCalledTimes(1)
        jest.runTimersToTime(300)
        expect(jest.getTimerCount()).toEqual(0)
        input.dispatchEvent(event)
        input.dispatchEvent(event)
        input.dispatchEvent(event)
        expect(setTimeout).toHaveBeenCalledTimes(2)
        jest.runTimersToTime(300)
        expect(jest.getTimerCount()).toEqual(0)
        jest.clearAllTimers()
    })
})

