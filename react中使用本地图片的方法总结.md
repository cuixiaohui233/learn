# 关于react引入图片的总结：
### 1.通过 import 的方法：
  `import imgURL from '../image/xxx.png';`
  ...
  ...
  `<img src={imgURL} />`
### 2.通过 require 的方法：
  `let img = require('../image/xxx.png');`
  ...
  ...
  `<img src={img} />`
  或者：
  `<img src={require('../image/xxx.png')}>`

  需要注意：
  以上两种方式存在弊端：
  1.require 只可以写字符串，不可以写变量；
  2.只适用于图片较少的方式，如果图片是存在一个 json 文件中廷议管理的化，推荐使用（也只有这种方式）以下方法：
### 3.使用 require.context 的方法：
  第一步：通过 require.context 从存放图片的文件夹中引入所有文件：
    `const imgURL = require.context('../image',true,/^\.\/.*\.png$/)`
    (这里简单介绍一下 require.context 的参数，第一个参数是图片存放的相对路径地址，第二个参数是是否查找子文件夹，第三个参数是匹配图片的正则表达式)

  第二步：
    `const imgs = imgURL.keys.map(imgURL);`

  第三步：
    循环遍历这个存放所有图片的数组，判断json中的图片名称是否与之匹配，如果匹配成功，则将图片地址赋值给 <img> 的 url
    `let img = '';
    imgs.forEach(function(e){
       if(e.indexOf(json.img) > 0){
         img = e;
       }
      });`
    ...
    ...
    `<img src={img} />`

综上，就可以完成 img 标签动态添加图片地址的代码了。
