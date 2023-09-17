const sqlite3 = require('sqlite3').verbose()
const {User, Jobs} = require('../models/index.js')
const {db} = require('./sequalize.init.js')
const {addJobDatas, addUsersDatas} = require('./migrate.js')
async function ConnectToDatabase(){
   // Sequelize connect to sqlite

   await db.authenticate().then(() => {
     console.log("Connection has been established successfully.");
     return db;
   })
   .catch((err) => {
     console.error("Unable to connect to the database: ", err);
   });
}

function SetupDatabase() {
   new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err && err.code == "SQLITE_CANTOPEN") {
         new sqlite3.Database('./test.db', (err) => {
            if (err) {
               console.log("Getting error " + err);
               exit(1);
            }
            SyncDatabase();
         });
         return;
      } else if (err) {
         console.log("Getting error " + err);
         exit(1);
      } 
   });
}

async function SyncDatabase() {
   try {
     await Jobs.sync();
     console.log('Table Jobs created successfully!');
     addJobDatas();
 
     await User.sync();
     console.log('Table User created successfully!');
     addUsersDatas();
   } catch (error) {
     console.error('Unable to create table: ', error);
   }
 }
 


module.exports = { SetupDatabase, ConnectToDatabase, SyncDatabase}