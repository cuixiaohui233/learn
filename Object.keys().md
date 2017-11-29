在实际开发中，我们有时需要知道对象的所有属性，原生js给我们提供了一个很好的方法：Object.keys()，该方法返回一个数组

* 传入对象，返回属性名
```
var obj = {'a':'123','b':'345'};
console.log(Object.keys(obj));  //['a','b']

var obj1 = { 100: "a", 2: "b", 7: "c"};
console.log(Object.keys(obj1)); // console: ["2", "7", "100"]

var obj2 = Object.create({}, { getFoo : { value : function () { return this.foo } } });
obj2.foo = 1;
console.log(Object.keys(obj2)); // console: ["foo"]
```
* 传入字符串，返回索引
```
var str = 'ab1234';
console.log(Object.keys(obj));  //[0,1,2,3,4,5]
```
* 构造函数 返回空数组或者属性名
```
function Pasta(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.toString = function () {
                return (this.name + ", " + this.age + ", " + this.gender);
        }
}

console.log(Object.keys(Pasta)); //console: []

var spaghetti = new Pasta("Tom", 20, "male");
console.log(Object.keys(spaghetti)); //console: ["name", "age", "gender", "toString"]
```
* 数组 返回索引
```
var arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // console: ["0", "1", "2"]
```