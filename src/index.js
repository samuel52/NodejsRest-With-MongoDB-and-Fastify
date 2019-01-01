//require the framweok and instantiate it
const fastify = require('fastify')({
	logger: true
})

//require routes
const routes = require('./routes')

//require mongodb
const mongoose = require('mongoose')

// Import Swagger Options
const swagger = require('./config/swagger')
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
//declear a route
// fastify.get('/', async (reqest, reply) => {
// 	return demo_api
// })
routes.forEach((route, index) => {
	fastify.route(route)
})

//run the server
// const start = async () => {
// 	try{
// 		await fastify.listen(3000)
// 		fastify.log.info(`server listening to ${fastify.server.address().port}`)
// 	}catch (err) {
// 		fastify.log.error(err)
// 		process.exit(1)
// 	}

// }

const start = async () => {
	try{
		await fastify.listen(3000)
		fastify.swagger()
		fastify.log.info(`listening on ${fastify.server.address().port}`)
	}catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}

}

//connect to db
mongoose.connect('mongodb://localhost/mycargarage')
.then(() => console.log('MongoDB connected…'))
.catch(err => console.log(err))
start()