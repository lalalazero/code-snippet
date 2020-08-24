import { myCall, myBind, myApply } from '../index'

describe('fn', () => {
    test('apply', () => {
        Function.prototype.myApply = myApply
        function hello(){
            return this.name
        }
        let res = hello.myApply({ name: 'jack' })
        expect(res).toEqual('jack')
    })

    test('call', () => {
        Function.prototype.myCall = myCall
        function hello(){
            return this.name
        }
        let res = hello.myCall({ name: 'jack' })
        expect(res).toEqual('jack')
    })

    test('bind', () => {
        Function.prototype.myBind = myBind
        function hello(){
            return this.name
        }
        let res = hello.myBind({ name: 'jack' })()
        expect(res).toEqual('jack')
        function foo(name){
            this.name = name
        }
        let obj = { name: 'obj' }
        let newFn = foo.myBind(obj)
        let copy = new newFn('foo')
        expect(copy).toEqual({ name: 'foo' })
    })

})