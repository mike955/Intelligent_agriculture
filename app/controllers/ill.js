//光照强度当前值显示页面
import 'babel-polyfill';

exports.ill = async function(ctx, next) {
	await ctx.render('ill', {
		title: "大圣果园"
	})
}