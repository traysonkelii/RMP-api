'use strict';
const joi = require('joi');

const getGrades = async (req, h) => {
    const id = req.params.professorId
    return await req.server.methods.getGrades(id)
}

module.exports = {
    grades: {
        handler: getGrades,
        description: 'Gets the grades given by professor from past students',
        notes: 'None',
        tags: ['api'],
        validate: {
            params: {
                professorId: joi.required().description('The Professor ID')
            }
        }
    }
}