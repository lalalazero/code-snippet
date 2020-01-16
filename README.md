# code-snippet


## 1. var 和 let 还有 for 循环的作用域问题

```javascript
// case0
for(var i = 0; i < 3; i++){
    console.log(i)
}
// case1
for(var i = 0; i < 3; i++){
  setTimeout(()=>{
      console.log(i)
  })
}
// case2
for(let i = 0; i < 3; i++){
  setTimeout(()=>{
      console.log(i)
  })
}
// case3
for(let i = (setTimeout(()=>console.log('init_' + i)),0); i < 3; i++){
    console.log(i)
}
```

### 解释

1. case0

    输出：`0  1 2`
2. case1

    输出：`2 2 2`
3. case2
    
    输出: `0 1 2`

    原因：每次循环都会拷贝一个新的 i，相当于如下代码
    ```
    for(let i = 0; i < 3; i++){
        var i_copy = i 
        setTimeout(()=>{
            console.log(i_copy)
        })
    }
    ```
4. case3

    输出：`0 1 2 init_0`
    
    原因：i 的初始值是不会变的（相当于一个单独的作用域），每次循环都是拷贝一个新的 i（每次循环也是新的一个作用域）
    
 
## 2. map 调用 parseInt 方法
```javascript
var arr1 = ["1","2","3"]

console.log(arr1.map(parseInt)) // [1, NaN, NaN]

console.log(arr1.map(x => parseInt(x))) // [1, 2, 3]
```

直接调用 `map(parseInt)` 其实等同于 `map(parseInt("1",0,arr))`，第一个参数是 `currentValue`，第二个参数是 `index`，第三个参数是 `arr` 本身。

`parseInt` 方法接收两个参数，一个是要被解析的字符串，一个是进制参数。参见 `MDN` 文档，进制的有效范围是 `2-36` 之间的整数。当传了一个无效的进制时：
>在基数为 undefined，或者基数为 0 或者没有指定的情况下，JavaScript 作如下处理：
- 如果字符串 string 以"0x"或者"0X"开头, 则基数是16 (16进制).
- 如果字符串 string 以"0"开头, 基数是8（八进制）或者10（十进制），那么具体是哪个基数由实现环境决定。ECMAScript 5 规定使用10，但是并不是所有的浏览器都遵循这个规定。因此，永远都要明确给出radix参数的值。
- 如果字符串 string 以其它任何值开头，则基数是10 (十进制)。
- 如果第一个字符不能被转换成数字，parseInt返回NaN。

每次使用 `parseInt` 最好都指明进制参数。
