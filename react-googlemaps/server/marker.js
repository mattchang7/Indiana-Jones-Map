const Sequelize = require('sequelize')
const db = require('./db')

const Marker = db.define('Marker', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contents: {
        type: Sequelize.TEXT
    },
    longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    latitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Marker