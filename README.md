# code-snippet


## 打印问题

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
