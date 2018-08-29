"use strict";
const request = require('request')

const gradeHelper = require('./../helpers/gradeHelper')

const getSummary = async (id) => {
    try {
        const options = {
            url: `http://www.ratemyprofessors.com/paginate/professors/ratings?tid=${id}&page=0&max=100&cache=false`,
            json: true
        }
        return new Promise((resolve, reject) => request(options, (err, res, body) => {
            if (err) {
                reject(err)
            }
            resolve(body)
        }))

    } catch (error) {
        throw error
    }
}

const getCom = async (id) => {
    try {
        const options = {
            url: `http://www.ratemyprofessors.com/paginate/professors/ratings?tid=${id}&page=0&max=100&cache=false`,
            json: true
        }
        return new Promise((resolve, reject) => request(options, (err, res, body) => {
            if (err) {
                reject(err)
            }
            if (body && res.statusCode === 200) {
                const {
                    ratings
                } = body
                const comments = ratings.map(ratings => ratings.rComments)
                if (comments.length < 1)
                    resolve(["No comments made for this professor"])
                resolve(comments)
            } else {
                resolve("No comments for this professor")
            }
        }))

    } catch (error) {
        throw error
    }
}

const getGrades = (id) => {
    try {
        const options = {
            url: `http://www.ratemyprofessors.com/paginate/professors/ratings?tid=${id}&page=0&max=300&cache=false`,
            json: true
        }
        return new Promise((resolve, reject) => request(options, (err, res, body) => {
            if (err) {
                reject(err)
            }
            if (body && res.statusCode === 200) {
                const {
                    ratings
                } = body
                const grades = ratings.map(ratings => ratings.teacherGrade)
                console.log(grades)
                const nGrades = gradeHelper.clean(grades)
                resolve(nGrades)
            } else {
                resolve("No comments for this professor")
            }
        }))

    } catch (error) {
        throw error
    }
}


module.exports = {
    getCom,
    getGrades,
    getSummary
}
