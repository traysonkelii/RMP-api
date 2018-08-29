'use strict';
const joi = require('joi');

const getProf = async (req, h) => {
    const name = req.params.name
    const schoolId = req.params.schoolId
    return await req.server.methods.getProfessor(name, schoolId)
}

const getSummary = async (req, h) => {
    const id = req.params.professorId
    return await req.server.methods.getSummary(id)
}

module.exports = {
    professor: {
        handler: getProf,
        description: 'Gets the name and ratings of a Professor',
        notes: 'None',
        tags: ['api'],
        validate: {
            params: {
                name: joi.required().description('The last name of the Professor of interest'),
                schoolId: joi.required().description('The school code'),
            }
        }
    },
    summary: {
        handler: getSummary,
        description: 'Gets the summary of a Professor',
        notes: 'None',
        tags: ['api'],
        validate: {
            params: {
                professorId: joi.required().description('The last name of the Professor of interest')
            }
        }
    }
}