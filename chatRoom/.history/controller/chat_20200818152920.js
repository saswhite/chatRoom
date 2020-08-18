const services = require('../services/chat')

async function welcome(ctx, next) {
    await ctx.render('login')
}

async function login(ctx, next) {
    const { name } = ctx.request.body
    let data = {
        status: 'success'
    }
    ctx.cookies.set('username', JSON.stringify(data))
    // if (services.judgeCookie(ctx)) {
    //     ctx.response.body = data
    // }
    // else {
    //     data.status = 'failed'
    //     ctx.response.body = data
    // }
    services.judgeCookie(ctx)
}

async function getChat(ctx, next) {
    await ctx.render('chat')
}

module.exports = {
    welcome,
    login,
    getChat
}