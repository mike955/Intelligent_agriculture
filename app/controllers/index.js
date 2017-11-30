import 'babel-polyfill';
class Index {
    static async index(ctx, next) {
        try {
            await ctx.render('index', {

            })
        } catch (err) {
            throw new Error(err);
        }
    }

    static async post(ctx, next){
    	console.log(ctx.request.body)
    }
}

export default Index;