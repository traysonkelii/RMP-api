const handler = require('./handlers')

const routes = [
    {
        method: 'GET',
        path: '/api/professor/{schoolId}/{name}',
        config: handler.professor.professor
    },
    {
        method: 'GET',
        path: '/api/comments/{professorId}',
        config: handler.comments.comments
    },
    {
        method: 'GET',
        path: '/api/grades/{professorId}',
        config: handler.grades.grades
    },
    {
        method: 'GET',
        path: '/api/school/{name}',
        config: handler.school.school
    },
    {
        method: 'GET',
        path: '/api/summary/{professorId}',
        config: handler.professor.summary
    }
];

module.exports = routes
