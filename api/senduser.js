const Router = require('koa-router')
const User = new Router()

User.post('/senduser', async ctx => {

  let date = new Date()
  let data = ctx.request.body
  console.log(data)
  ctx.body = data

})

module.exports = User
