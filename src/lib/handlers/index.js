"use strict";

const professor = require('./professor-handler')
const comments = require('./comments-handler')
const grades = require('./grade-handler')
const school = require('./school-handler')

module.exports = {
    professor,
    comments,
    grades,
    school
}