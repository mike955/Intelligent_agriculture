'use strict';
/***** import node.js librarie *****/
import path from 'path';
import fs from 'fs';
import http from 'http';
import https from 'https';

/***** import third-party libraries *****/
import express from 'express';
import Koa from 'koa';
import serve from 'koa-static';
import debugg from 'debug';
import enforceHttps from 'koa-sslify';
// import bodyParser from 'body-parser';
import bodyParser from 'koa-bodyparser';
import views from 'koa-views';

/***** import own libraries *****/
import configs from './app/configs';
import router from './app/routes/routes'

import 'babel-polyfill';
// const app = express();
const app = new Koa();
let debug = debugg('MERN');

/** app 设置 **/
/*app
    .set('views', path.join(__dirname, 'app/views/pages'))
    .set('view engine', 'pug')*/

/** 注册中间件**/
app
    // .use(express.static(path.join(__dirname, 'app/public')))
    .use(enforceHttps())
    .use(views(__dirname + '/app/views/pages', {  //模板引擎设置
        map: { html: 'pug' }
    }))
    .use(serve(__dirname + '/app/public'))
    .use(bodyParser())
    // .use(bodyParser.json())
    // .use(router)
    .use(router.routes())
    .use(router.allowedMethods())

if (process.env.NODE_ENV === 'production') {
    debug('Enviroment is product')
} else { //增加错误处理
    /*app.use((err, ctx, next) => {
        console.log(err.stack);
        next();
    })*/
    app.on('error', (err, ctx) => {
      log.error('server error', err, ctx)
    });
    debug('Enviroment is development')
}


const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};

http.createServer(app.callback()).listen(2016, (err) => {
    debug('listen')
    if (err) {
        throw new Error(err);
    }
    console.log('Server start at ' + configs.port);
});

https.createServer(options, app.callback()).listen(2017, (err) => {
    debug('listen')
    if (err) {
        throw new Error(err);
    }
    console.log('Server start at ' + configs.port);
});

// app.listen(configs.port, (err) => {
//     debug('listen')
//     if (err) {
//         throw new Error(err);
//     }
//     console.log('Server start at ' + configs.port);
// })
