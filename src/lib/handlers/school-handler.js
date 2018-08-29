'use strict';
const joi = require('joi');

const getSchool = async (req, h) => {
    const name = req.params.name
    return await req.server.methods.getSchool(name)
}

module.exports = {
    school: {
        handler: getSchool,
        description: 'Gets the list of school codes for your school',
        notes: 'None',
        tags: ['api'],
        validate: {
            params: {
                name: joi.required().description('The last name of the school')
            }
        }
    }
}