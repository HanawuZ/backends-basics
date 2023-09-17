const { User } = require('../models/index.js')
const job_samples = require('../samples/job.samples.js')

const user1 = User.build({
    name: 'Mary Doe',
    email: "reg@gmail.com",
    age: 20,
    gender: "Female",
    jobId: job_samples.jobsList[1].id
})

const user2 = User.build({
    name: 'James Doe',
    email: "foo@gmail.co.th",
    age: 42,
    gender: "Male",
    jobId: job_samples.jobsList[0].id
})

const user3 = User.build({
    name: 'Make Make',
    email: "a@gmail.com",
    age: 25,
    gender: "Male",
    jobId: job_samples.jobsList[1].id
})
const userList = [user1, user2, user3]

module.exports = { userList }