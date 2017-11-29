reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始合并，最终为一个值。

### 参数
callback
执行数组中每个值的函数，包含四个参数
previousValue
上一次调用回调返回的值，或者是提供的初始值（initialValue）
currentValue
数组中当前被处理的元素
index
当前元素在数组中的索引
array
调用 reduce 的数组
initialValue
作为第一次调用 callback 的第一个参数。
### 描述
reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

回调函数第一次执行时，previousValue 和 currentValue 可以是一个值，如果 initialValue 在调用 reduce 时被提供，那么第一个 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；如果initialValue 未被提供，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值。
如果数组为空并且没有提供initialValue， 会抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。
例如执行下面的代码

[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
});
结果为10

如果将初始值传入的话
[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
}，10);
结果为20；

### 例子

例子:将数组所有项相加
```
var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});
// total == 6
```
例子: 数组扁平化
```
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
```