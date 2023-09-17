const {User, Jobs} = require('../models/index.js')
const job_samples = require('../samples/job.samples.js')
const user_samples = require('../samples/user.samples.js')

async function addJobDatas(){
    for (const job of job_samples.jobsList) {
        await job.save()
    }
}

async function addUsersDatas(){
    for (const user of user_samples.userList) {
        console.log(user)
        await user.save()
    }
}

module.exports = {addJobDatas, addUsersDatas}