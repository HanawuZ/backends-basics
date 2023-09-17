// import { Sequelize } from "sequelize"
// export const db = new Sequelize({
//     dialect: 'sqlite',
//     storage: './test.db'
// })

// ------------------ OR ------------------
const { Sequelize } = require('sequelize')
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './test.db'
})
module.exports = {db}