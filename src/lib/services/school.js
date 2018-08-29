'use strict';
const request = require('request')

const getSchool = async (name) => {
    try {
        const options = {
            url : `http://search.mtvnservices.com/typeahead/suggest/?solrformat=true&rows=20&q=${name}&defType=edismax&bq=schoolname_sort_s%3A%22Br%22%5E1000&qf=schoolname_autosuggest&bf=pow(total_number_of_ratings_i%2C1.9)&sort=score+desc&siteName=rmp&rows=20&group=off&group.field=content_type_s&group.limit=20&fq=content_type_s%3ASCHOOL`,
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
    getSchool
}

