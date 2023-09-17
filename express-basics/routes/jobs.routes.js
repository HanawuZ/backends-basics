const express = require('express')
const router = express.Router()
const {getJobByID, listJob} = require('../controllers/jobs.controller.js')

router.get('/job/:id', getJobByID)
router.get('/list-jobs', listJob)

module.exports = router
