'use strict';
/***** import node.js librarie *****/

/***** import third-party libraries *****/
import express from 'express';
import debugg from 'debug';
import Router from 'koa-router';

/***** import own libraries *****/
import Index from '../controllers/index'
import A_TH from '../controllers/a_TH';
import S_TH from '../controllers/s_TH';
import EC from '../controllers/ec';
import Ill from '../controllers/ill';

// let router = express.Router();
const router = new Router();
let debug = debugg('MERN');

debug('Router:use middlware');
// router.use((req, res, next) => {
//     next();
// });
debug('Router:start');
router
	.get('/', Index.index) //首页

	.post('/', Index.post)

	//显示当前空气温湿度
	.get('/a_TH', A_TH.a_TH)

	//空气温湿度历史记录时间节点选择
	.get('/a_his_choice', A_TH.a_TH_his)

	//空气温湿度历史记录
	.post('/a_his_data', A_TH.a_TH_view)



	//土壤温湿度--s_TH
	.get('/s_TH', S_TH.s_TH)

	//土壤温湿度历史记录时间节点选择
	.get('/s_TH_his', S_TH.s_TH_his)

	//土壤温湿度历史记录--a_TH_his
	.post('/s_TH_his/new', S_TH.s_TH_view)

	//光照强度--ill
	.get('/ill', Ill.ill)

	//EC值--EC
	.get('/ec', EC.ec)


export default router;