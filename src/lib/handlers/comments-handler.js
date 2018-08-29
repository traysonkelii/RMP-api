'use strict';
const joi = require('joi');

const getComs = async (req, h) => {
    const id = req.params.professorId
    return await req.server.methods.getComments(id)
}

module.exports = {
    comments: {
        handler: getComs,
        description: 'Gets the comments made by students of a Professor',
        notes: 'None',
        tags: ['api'],
        validate: {
            params: {
                professorId: joi.required().description('The Professor ID')
            }
        }
    }
}