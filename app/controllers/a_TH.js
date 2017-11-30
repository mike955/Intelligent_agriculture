import knex from '../configs/knex';
import moment from 'moment';
import fs from 'fs-extra';
import 'babel-polyfill';
//var fs = require('fs');

//显示当前空气温湿度
export default class A_TH{
	static async a_TH(ctx, next){
		let _date = '2017-3-30 15:11:31'
		// let _date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
		await ctx.render('a_TH',{
			D00124B00061C8700: _date,
			V00124B00061C8700: '20.6',
			D00124B00061C8701: _date,
			V00124B00061C8701: '20.7',
			D00124B00061C8702: _date,
			V00124B00061C8702: '20.5',
			D00124B00061C8703: _date,
			V00124B00061C8703: '20.5',
			D00124B00061C8704: _date,
			V00124B00061C8704: '20.3',
			D00124B00061C8705: _date,
			V00124B00061C8705: '20.2',
			D00124B00061C8706: _date,
			V00124B00061C8706: '20.4',
			D00124B00061C8707: _date,
			V00124B00061C8707: '20.6'
		})
	}

	//空气温湿度历史记录时间节点选择--a_TH_his
	static async a_TH_his(ctx, next){
		await ctx.render('a_TH_his',{
		});
	}

  //空气温湿度历史记录显示--a_TH_view
	static async a_TH_view(ctx, next){
		try{
			ctx.body = ctx.request.body;
			//console.log(ctx.request.body)
			let s_time = ctx.body.start_time;
			let e_time = ctx.body.end_time;
			let node = ctx.body.node_select;
			let rows = [
				{
					MAC:1111,
					date:45,
					data:"12.5286.4548.56",
				},{
					MAC:2222,
					date:456,
					data:"14.5288.4588.63",
				}
			]
			//let node_ch = "test10" + node.substring(14).toString();
			//console.log(node_ch);
			//console.log(s_time);
			//console.log(e_time);
			console.log(rows)
			await ctx.render('a_TH_view', {
				start_time: s_time,
				end_time: e_time,
				node_: node,
				views: rows
			})
		}catch(err){
			console.log(err);
		}
	}
}

//显示当前空气温湿度
// exports.a_TH = async function( ctx, next) {
// 	let _date = '2017-3-30 15:11:31'
// 	// let _date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
// 	await ctx.render('a_TH',{
// 		D00124B00061C8700: _date,
// 		V00124B00061C8700: '20.6',
// 		D00124B00061C8701: _date,
// 		V00124B00061C8701: '20.7',
// 		D00124B00061C8702: _date,
// 		V00124B00061C8702: '20.5',
// 		D00124B00061C8703: _date,
// 		V00124B00061C8703: '20.5',
// 		D00124B00061C8704: _date,
// 		V00124B00061C8704: '20.3',
// 		D00124B00061C8705: _date,
// 		V00124B00061C8705: '20.2',
// 		D00124B00061C8706: _date,
// 		V00124B00061C8706: '20.4',
// 		D00124B00061C8707: _date,
// 		V00124B00061C8707: '20.6'
// 	})

// 	//查询MAC地址00124B00061C8700
// 	connection.query('select * from test1000 where id=(select max(id) from test1000)',
// 		function(err, rows) {
// 		 	if (err) {
// 		 		console.log(err);
// 		 	} else {
// 		 		//console.log(rows[0].data);//查询结果是一个对象，对象里面是一个一个的数组,因此要写rows[0],而不是只写rows
// 		 		date00 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 		 		value00= rows[0].data;
// 		 		find01();
// 		 	}
// 	  }
// 	)
	
// 	//查询MAC地址00124B00061C8701
// 	function find01() {
// 		connection.query('select * from test1001 where id=(select max(id) from test1001)',
// 			function(err, rows) {
// 			 	if (err) {
// 			 		console.log(err);
// 			 	} else {
// 			 		date01 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 			 		value01 = rows[0].data;
// 			 		find02();
// 			 	}
// 		  }
// 		)
// 	}	
	
// 	//查询MAC地址00124B00061C8702
// 	function find02() {
// 		connection.query('select * from test1002 where id=(select max(id) from test1002)',
// 			function(err, rows) {
// 			 	if (err) {
// 			 		console.log(err);
// 			 	} else {
// 			 		date02 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 			 		value02 = rows[0].data;
// 			 		find03();
// 			 	}
// 		  }
// 		)
// 	}	
	
// 	//查询MAC地址00124B00061C87003
// 	function find03() {
// 		connection.query('select * from test1003 where id=(select max(id) from test1003)',
// 			function(err, rows) {
// 			 	if (err) {
// 			 		console.log(err);
// 			 	} else {
// 			 		date03 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 			 		value03 = rows[0].data;
// 			 		find04();
// 			 	}
// 		  }
// 		)
// 	}	
	
// 	//查询MAC地址00124B00061C8704
// 	function find04() {
// 		connection.query('select * from test1004 where id=(select max(id) from test1004)',
// 			function(err, rows) {
// 			 	if (err) {
// 			 		console.log(err);
// 			 	} else {
// 			 		date04 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 			 		value04 = rows[0].data;
// 			 		find05();
// 			 	}
// 		  }
// 		)
// 	}	
	
// 	//查询MAC地址00124B00061C8705
// 	function find05() {
// 		connection.query('select * from test1005 where id=(select max(id) from test1005)',
// 			function(err, rows) {
// 			 	if (err) {
// 			 		console.log(err);
// 			 	} else {
// 			 		date05 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 			 		value05 = rows[0].data;
// 			 		find06();
// 			 	}
// 		  }
// 		)
// 	}
	
// 	//查询MAC地址00124B00061C8706
// 	function find06() {
// 		connection.query('select * from test1006 where id=(select max(id) from test1006)',
// 		  function(err, rows) {
// 			 	if (err) {
// 			 		console.log(err);
// 			 	} else {
// 			 		date06 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 			 		value06 = rows[0].data;
// 			 		find07();
// 			 	}
// 		  }
// 		)
// 	}	
	
// 	//查询MAC地址00124B00061C8707
// 	function find07() {
// 		connection.query('select * from test1007 where id=(select max(id) from test1007)',
// 			function(err, rows) {
// 			 	if (err) {
// 			 		console.log(err);
// 			 	} else {
// 			 		date07 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
// 			 		value07 = rows[0].data;
// 			 	}

// 			 	//将查询到的数据发送给界面显示
// 			 	res.render('a_TH',{
// 			 		D00124B00061C8700: date00,
// 			 		V00124B00061C8700: value00,
// 			 		D00124B00061C8701: date01,
// 			 		V00124B00061C8701: value01,
// 			 		D00124B00061C8702: date02,
// 			 		V00124B00061C8702: value02,
// 			 		D00124B00061C8703: date03,
// 			 		V00124B00061C8703: value03,
// 			 		D00124B00061C8704: date04,
// 			 		V00124B00061C8704: value04,
// 			 		D00124B00061C8705: date05,
// 			 		V00124B00061C8705: value05,
// 			 		D00124B00061C8706: date06,
// 			 		V00124B00061C8706: value06,
// 			 		D00124B00061C8707: date07,
// 			 		V00124B00061C8707: value07
// 			 	})
// 		  }
// 		)
// 	}	
// }

//空气温湿度历史记录时间节点选择--a_TH_his
/*exports.a_TH_his = async function(ctx, next) {
	
	await ctx.render('a_TH_his',{
	})
};*/

//空气温湿度历史记录显示--a_TH_view
/*exports.a_TH_view = async function(ctx, next) {
	ctx.body = ctx.request.body;
	//console.log(ctx.request.body)
	let s_time = ctx.body.start_time;
	let e_time = ctx.body.end_time;
	let node = ctx.body.node_;
	//let node_ch = "test10" + node.substring(14).toString();
	//console.log(node_ch);
	console.log(s_time);
	console.log(e_time);
	await ctx.render('a_TH_view', {
		start_time: s_time,
		end_time: e_time,
		node_: node,
		views: rows
	})
	s_time = req.body.start_time;
	e_time = req.body.end_time;
	node = req.body.node_;
	node_ch = "test10" + node.substring(14).toString();
	//console.log(node_ch);
	console.log(s_time);
	console.log(e_time);
	connection.query("SELECT * FROM "+node_ch+" WHERE date >= '"+s_time+"' AND date <= '"+e_time+"' ",
			function(err, rows) {
			if (err) {
				console.log(err)
			} else {
				//date.format('YYYY/MM/DD, HH:mm:ss');
				var data_ = JSON.stringify(rows);
				//fs.writeFileSync('./views/a_TH03.json',JSON.stringify(rows));
				fs.outputFile('./public/date/a_TH.json', data_, function(err){
					console.log(err);
				});
				//console.log(data_);
				//console.log(rows);
				//var data_ = JSON.stringify(rows);
				res.render('a_TH_view', {
					start_time: s_time,
					end_time: e_time,
					node_: node,
					views: rows
				})
			}
		}
	)
}*/