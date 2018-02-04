### 1.let 声明变量
(1).声明的变量只在代码块中有效：

{
  let a = 12;
  var arr = [1,2,3];
}

console.log(a); // a is not defined.
console.log(arr); // [1,2,3]

(2).在for循环中可以用作索引 index.

var arr = [];
for(let i=0;i<10;i++){
  arr[i] = function(){
    console.log(i);
  };
}
arr[6](); // 6

这里需要注意两点：
第一：上面的代码中，变量 i 是 let 声明的，当前的 i 只在本轮循环有效，所以每次的 i 都是一个新的变量，所以最后输出6；
第二：JavaScript 会自动记住这一次的变量值，在下一次计算时，会在上一次的基础上进行计算；
第三：for 循环在设置循环变量是父作用域，而循环体内部是一个单独的子作用域，有单独的作用域范围。

(3).不存在变量提升

console.log(a); // undefined
var a = 3;

console.log(b); // 报错
let b = 4;

(4).暂时性死区

只要是块级作用域内存在 let 命令，他所声明的变量就会绑定这个块级作用域，不在受外部影响：

vat tem = 123;

if(ture){
  tmp = 'abc';
  console.log(tmp); // 报错
  let tmp;
}

(5).不允许重复声明：

function fn(){
  var i = 123;
  let i = 'abc'; // ok
}

function fn(){
  let s = 'hhh';
  let s = []; // 报错
}

### 2.const 声明变量
(1).一旦声明，常量的值就不会改变
