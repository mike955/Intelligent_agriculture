//EC计当前值显示页面
import 'babel-polyfill';

exports.ec = async function(ctx, next) {
	await ctx.render('ec', {
		title: "大圣果园"
	});
}