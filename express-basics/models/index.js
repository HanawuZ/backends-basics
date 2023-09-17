// import { DataTypes, Model } from "sequelize";
// import { db } from "../config/sequalize.init.js";

// ------------------ OR ------------------
const { DataTypes, Model } = require('sequelize');
const { db } = require('../config/sequalize.init.js')

// export class User extends Model{}
// User.init({
//    // Model attributes are defined here
//    firstName: { type: DataTypes.STRING, allowNull: false},
//    lastName: { type: DataTypes.STRING }
//  }, {
//    // Other model options go here
//    db, // We need to pass the connection instance
//    modelName: 'User' // We need to choose the model name
//  });


/* 
class User {
  String name;
  String email;
  String gender;
  int age;
  String category;
}

*/

const Jobs = db.define('Job', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  degree: { type: DataTypes.STRING, allowNull: false },
})


const User = db.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: true },
  gender: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER, allowNull: false },
  jobId: { type: DataTypes.INTEGER, references: { model: Jobs, key: 'id' } }
});

Jobs.hasMany(User, { foreignKey: 'jobId' })
// User.belongsTo(Jobs, {foreignKey: 'jobId'})





// console.log(User === db.models.User); // true

module.exports = { User, Jobs };