const db = require('../../../database/dbConfig')

module.exports = {
    getQutters,
    getQutterId,
    addQutter
}


function getQutters() {
    return db('curliQutters')
}

function getQutterId(id) {
    return db('curlQutters')
        .where({id})
}

function addQutter(qutter) {
    return db('curliQutters')
        .insert(qutter)
        .into('curliQutters')
        // .then( () => {
        //     return db('curliQutters')
        //         .where({qutter: qutter.username})
        // })
}