"use strict";
const request = require('request')

const getProf = async (name,schoolId) => {
    try {
        const options = {
            url: `http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=100&q=${name}+AND+schoolid_s%3A${schoolId}&defType=edismax&qf=teacherfirstname_t%5E2000+teacherlastname_t%5E2000+teacherfullname_t%5E2000+autosuggest&bf=pow(total_number_of_ratings_i%2C2.1)&sort=total_number_of_ratings_i+desc&siteName=rmp&rows=20&start=0&fl=pk_id+teacherfirstname_t+teacherlastname_t+total_number_of_ratings_i+averageratingscore_rf+schoolid_s&fq=`,
            json: true
        }
        return new Promise((resolve, reject) => request(options, (err, res, body) => {
            if (err) {
                reject(err)
            }
            if (body && res.statusCode === 200) {
                const {
                    response: {
                        docs
                    }
                } = body
                resolve(docs)
            } else {
                resolve("No matching instances")
            }
        }))

    } catch (error) {
        throw error
    }
}
module.exports = {
    getProf
}
