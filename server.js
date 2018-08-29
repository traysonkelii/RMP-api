'use strict';

const Hapi = require('hapi'),
    plugins = require('./src/lib/plugins'),
    routes = require('./src/lib/routes')

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        cors: true
    }
});


const init = async () => {
    try {
        await server.register(plugins);
        await server.route(routes)
        await server.ext('onRequest', async (request, h) => {
            request.headers['x-forwarded-host'] = (request.headers['x-forwarded-host'] || request.info.host);
            return h.continue;
        });
        await server.start()
    } catch (error) {
        console.log(error, "There was a problem with the initial launch of the server")
    }
}

init();