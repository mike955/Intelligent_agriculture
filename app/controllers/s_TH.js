import knex from '../configs/knex';
import moment from 'moment';
import fs from 'fs-extra';
import 'babel-polyfill';
//显示当前土壤温湿度
exports.s_TH = async function(ctx, next) {
	await ctx.render('s_TH',{
		D00124B00061C8708: 123,
		V00124B00061C8708: 123,
		D00124B00061C8709: 123,
		V00124B00061C8709: 123,
		D00124B00061C8710: 123,
		V00124B00061C8710: 123,
		D00124B00061C8711: 123,
		V00124B00061C8711: 123,
		D00124B00061C8712: 123,
		V00124B00061C8712: 123,
		D00124B00061C8713: 123,
		V00124B00061C8713: 123,
		D00124B00061C8714: 123,
		V00124B00061C8714: 123,
		D00124B00061C8715: 123,
		V00124B00061C8715: 123
	})
	
	/*//查询MAC地址00124B00061C8708
	connection.query('select * from test1008 where id=(select max(id) from test1008)',
		 function(err, rows) {
		 	if (err) {
		 		console.log(err);
		 	} else {
		 		//console.log(rows[0].data);//查询结果是一个对象，对象里面是一个一个的数组,因此要写rows[0],而不是只写rows
		 		date08 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
		 		value08= rows[0].data;
		 		find09();
		 	}
		}
	)
	
	//查询MAC地址00124B00061C8709
	function find09() {
		connection.query('select * from test1009 where id=(select max(id) from test1009)',
			function(err, rows) {
			 	if (err) {
			 		console.log(err);
			 	} else {
			 		date09 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
			 		value09 = rows[0].data;
			 		find10();
			 	}
			}
		)
	}	
	
	//查询MAC地址00124B00061C8702
	function find10() {
		connection.query('select * from test1010 where id=(select max(id) from test1010)',
			function(err, rows) {
			 	if (err) {
			 		console.log(err);
			 	} else {
			 		date10 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
			 		value10 = rows[0].data;
			 		find11();
			 	}
			}
		)
	}	
	
	//查询MAC地址00124B00061C87011
	function find11() {
		connection.query('select * from test1011 where id=(select max(id) from test1011)',
			function(err, rows) {
			 	if (err) {
			 		console.log(err);
			 	} else {
			 		date11 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
			 		value11 = rows[0].data;
			 		find12();
			 	}
			}
		)
	}	
	
	//查询MAC地址00124B00061C8712
	function find12() {
		connection.query('select * from test1012 where id=(select max(id) from test1012)',
			function(err, rows) {
			 	if (err) {
			 		console.log(err);
			 	} else {
			 		date12 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
			 		value12 = rows[0].data;
			 		find13();
			 	}
			}
		)
	}	
	
	//查询MAC地址00124B00061C8713
	function find13() {
		connection.query('select * from test1013 where id=(select max(id) from test1013)',
			function(err, rows) {
			 	if (err) {
			 		console.log(err);
			 	} else {
			 		date13 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
			 		value13 = rows[0].data;
			 		find14();
			 	}
			}
		)
	}
	
	//查询MAC地址00124B00061C8714
	function find14() {
		connection.query('select * from test1014 where id=(select max(id) from test1014)',
			function(err, rows) {
			 	if (err) {
			 		console.log(err);
			 	} else {
			 		date14 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
			 		value14 = rows[0].data;
			 		find15();
			 	}
			}
		)
	}	
	
	//查询MAC地址00124B00061C8715
	function find15() {
		connection.query('select * from test1015 where id=(select max(id) from test1015)',
			function(err, rows) {
			 	if (err) {
			 		console.log(err);
			 	} else {
			 		date15 = moment(rows[0].date).format('YYYY/MM/DD, HH:mm:ss');
			 		value15 = rows[0].data;
			 	}

			 	res.render('s_TH',{
			 		D00124B00061C8708: date08,
			 		V00124B00061C8708: value08,
			 		D00124B00061C8709: date09,
			 		V00124B00061C8709: value09,
			 		D00124B00061C8710: date10,
			 		V00124B00061C8710: value10,
			 		D00124B00061C8711: date11,
			 		V00124B00061C8711: value11,
			 		D00124B00061C8712: date12,
			 		V00124B00061C8712: value12,
			 		D00124B00061C8713: date13,
			 		V00124B00061C8713: value13,
			 		D00124B00061C8714: date14,
			 		V00124B00061C8714: value14,
			 		D00124B00061C8715: date15,
			 		V00124B00061C8715: value15
			 	})
			}
		)
	}	*/
}

//土壤温湿度历史记录时间节点选择--s_TH_his
exports.s_TH_his = function(req,res) {

	res.render('s_TH_his',{
	})
}

//土壤温湿度历史记录显示--s_TH_his
exports.s_TH_view = function(req, res) {
	/*s_time = req.body.start_time;
	e_time = req.body.end_time;
	node = req.body.node_;
	node_ch = "test10" + node.substring(14).toString();
	//console.log(node_ch);
	console.log(s_time);
	console.log(e_time);
	connection.query("SELECT * FROM "+node_ch+" WHERE date >= '"+s_time+"' AND date <= '"+e_time+"' "
		,function(err, rows) {
			if (err) {
				console.log(err)
			} else {
				var data_ = JSON.stringify(rows);
				//fs.writeFileSync('./views/a_TH03.json',JSON.stringify(rows));
				fs.outputFile('./public/date/s_TH.json', data_, function(err){
					console.log(err);
				});
				//console.log(data_);
				//console.log(rows);
				//var data_ = JSON.stringify(rows);
				res.render('s_TH_view', {
					start_time: s_time,
					end_time: e_time,
					node_: node,
					views: rows
				})
			}
		}
	)*/
}