//导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

//导入参数解析中间件 post get请求 json读取
const bodyParser = require('koa-bodyparser');

//路由控制器
const controller = require('./controller');

//导入mongodb
const mongoose = require('mongoose');

//创建一个Koa对象表示web app本身:
const app = new Koa();

// log request URL: 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  // console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

//连接mongodb 数据库 ，地址为hero的地址以及集合名称。
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hero');

//使用参数解析中间件,注意，此中间件必须在router前被使用 parse request body:
app.use(bodyParser());

// 路由控制 add router:
app.use(controller());

// 在端口4040监听:
app.listen(4040);
console.log('app started at port 4040...');
