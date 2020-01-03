```javascript
// 参数传递都是值传递
function setname(obj){
    obj.name = 'Nicholas'
    obj = new Object()
    obj.name = 'Greg'
}
var person = new Object()
person.name = 'Chris'
setname(person)
console.log(person.name) // Nicholas
```


```javascript
console.log(0.1 + 0.2)
// 0.30000000000000004
```
```javascript
var person1 = {
    toLocaleString: function(){
        return 'Nikolaos'
    },
    toString: function(){
        return 'Nicholas'
    }
}
var person2 = {
    toLocaleString: function(){
        return 'Grigorious'
    },
    toString: function(){
        return 'Greg'
    }
}
var people = [person1, person2]
console.log(people)
console.log(people.toString())
console.log(people.toLocaleString())
```


```javascript
// 数组的 sort 方法默认排序比较的是 toString() 之后的字符串，即便数组每一项是数字
var arr = [0,1,5,10,15]
arr.sort()
console.log(arr) // [0, 1, 10, 15, 5]

function compare(v1, v2){
    return v1 - v2
}
arr.sort(compare)
console.log(arr) // [0, 1, 5, 10, 15]
```