# code-snippet


## 1. 打印问题

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
    
 
## 2. vue 动画实现轮播效果
基于 vue2.6
```html
<div id="demo">
    <button v-on:click="show = !show">
        Toggle
    </button>
    <div style="display: flex">
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <transition name="fade">
            <p v-if="!show">world</p>
        </transition>
    </div>
</div>
```

```javascript
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
```

```scss
#demo {
  padding: 20px;
  border: 1px solid;
  p {
    border: 1px solid red;
    width: 100px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%)
}
.fade-enter-active {
  position: absolute;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100%)
}
```

