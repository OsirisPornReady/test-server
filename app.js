const config = require ( './config' );
const path = require('path');
const fs = require('fs');
const fastify = require('fastify');

const app = fastify({ logger: false });

const initServer = () => {
    app.get('/', async (request, reply) => {
        return { 'message': 'api test' }
    });

    app.get('/hello', async (request, reply) => {
        return { 'message': 'hello, world' }
    });
}

// Run the server!
const startServer = async () => {
    try {
        await app.listen({
            host: '0.0.0.0',
            port: config.port
        })
    } catch (err) {
        app.log.error(err)
        process.exit(1);
    }
}

initServer();
startServer().then( r  => {
    console.log('服务器启动成功!', config.port);
});

module.exports = app;
