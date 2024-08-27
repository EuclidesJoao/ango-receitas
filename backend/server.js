import fastify from "fastify";
//import {Fastify} from "fastify.js";


const fastify  = fastify({
    logger: true,
})

fastify.get('/', async (req, res) => {
    return{hello: 'world'}
})

try {
    await fastify.listen({port: 3002})
} catch (error) {
    fastify.log.error(error)
    process.exit(1)
}