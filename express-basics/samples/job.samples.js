const {Jobs } = require('../models/index.js')

const student = Jobs.build({
    id : 1,
    name: 'Student',
    degree: 'Bachelor'
})

const doctor = Jobs.build({
    id : 2,
    name: 'Doctor',
    degree: 'Doctorate'
})

const engineer = Jobs.build({
    id : 3,
    name: 'Engineer',
    degree: 'Master'
})

const jobsList = [student, doctor, engineer]

module.exports = {jobsList}