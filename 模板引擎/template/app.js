// 导入模板引擎
const template = require('art-template');
const path = require('path');

// template 方法是用来拼接字符串的
// 1.模板的路径 绝对路径
// 2.要在模板中显示的数据 对象类型
// 返回拼接好的字符串

const views = path.join(__dirname, 'views', 'index.art')
const html = template(views, {
    name: '张三',
    age: 20
});

console.log(html);