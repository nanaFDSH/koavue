//引入数据模型模块
const Hero = require("../models/heroSchema");

// 查询所有英雄信息路由
var hero = async (ctx, next) => {
  let list = await Hero.find({});
  let data=[];
  for (let p of list) {
    data.push(p)
  }
  // console.log(data)
  ctx.response.body = data;
};

// 通过ObjectId查询单个英雄信息路由
var heroid = async (ctx, next) => {
  let id = ctx.request.body.params;
  let list_id = await Hero.findById(id.uid);
  // console.log(list_id)
  ctx.response.body = list_id;
};

// 添加一个英雄信息路由
// router.post("/hero", (req, res) => {
//   //使用Hero model上的create方法储存数据
//   Hero.create(req.body, (err, hero) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(hero);
//     }
//   });
// });

//更新一条英雄信息数据路由
// router.put("/hero/:id", (req, res) => {
//   Hero.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       $set: {
//         name: req.body.name,
//         age: req.body.age,
//         sex: req.body.sex,
//         address: req.body.address,
//         dowhat: req.body.dowhat,
//         favourite: req.body.favourite,
//         explain: req.body.explain
//       }
//     },
//     {
//       new: true
//     }
//   )
//     .then(hero => res.json(hero))
//     .catch(err => res.json(err));
// });

// 添加图片路由
// router.put("/addpic/:id", (req, res) => {
//   Hero.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       $push: {
//         imgArr: req.body.url
//       }
//     },
//     {
//       new: true
//     }
//   )
//     .then(hero => res.json(hero))
//     .catch(err => res.json(err));
// });

//删除一条英雄信息路由
var herodelate = async (ctx, next) => {
  let id = ctx.request.body.params;
  let list_del = await Hero.findOneAndRemove({
    _id: id.delateid
  });
  ctx.response.body = list_del;
};

module.exports = {
  'GET /api/hero': hero,
  'POST /api/heroid': heroid,
  'POST /api/delete': herodelate
};
