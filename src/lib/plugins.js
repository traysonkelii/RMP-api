"use strict"

const inert = require('inert'),
    vision = require('vision'),
    swagger = require('hapi-swagger'),
    hapiPino = require('hapi-pino');

//Service exports
const professor = require('./services/professor'),
    profile = require('./services/profile'),
    school = require('./services/school')

const localCache = {
    expiresIn: 60 * 60 * 1000,
    staleIn: 10 * 60 * 1000,
    staleTimeout: 500,
    generateTimeout: 20 * 1000
}

const swaggerOptions = {
    host: 'localhost:3000',
    basePath: '/',
    documentationPath: '/',
    schemes: ['http']
}

const servicePlugins = async(server, options, next) => {
    server.method('getProfessor', professor.getProf, {
        cache : localCache
    })
    server.method('getComments', profile.getCom, {
        cache : localCache
    })
    server.method('getGrades', profile.getGrades, {
        cache: localCache
    });
    server.method('getSchool', school.getSchool, {
        cache: localCache
    });
    server.method('getSummary', profile.getSummary, {
        cache: localCache
    });
}

let plugins = module.exports = []

plugins.push({
    name: 'server-methods',
    register: servicePlugins
})
plugins.push(inert)
plugins.push(vision)
plugins.push({
    plugin: swagger,
    options: swaggerOptions
})
plugins.push({
    plugin: hapiPino,
    options: {
        prettyPrint: true,
        logEvents: ['log', 'onPostStart', 'onPostStop', 'response', 'request-error']
    }
})