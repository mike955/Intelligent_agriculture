'use strict';

module.exports = {
    client: 'mysql', //数据库类型
    connection: {
        host: 'localhost', //数据库地址
        user: 'root', //数据库用户名
        password: '3564423', //数据库密码
        database: 'dsgy001', //数据库名字
        port: 3306, //端口号
        dateStrings: true , //使从数据库提取出来的时间保持原来的格式
		multipleStatements: true  //允许实行多条语句
    },
    pool: { //设置数据库连接池数量
        min: 0,
        max: 10
    }
}