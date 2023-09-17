const {Jobs} = require('../models/index.js')

async function getJobByID(req, res){
    try {
        const { id } = req.params;
        const job = await Jobs.findByPk(id)
        if (job) {
            return res.status(200).json(job)
        } else {
            return res.status(404).json(`No job with id ${id} found`)
        }

    } catch (error) {
        return res.status(500).json("Error while fetching job")
    }
}

async function listJob(req,res){
    try {
        const jobs = await Jobs.findAll()
        if (jobs) {
            return res.status(200).json(jobs)
        } else {
            return res.status(404).json("No jobs found")
        }

    } catch (error) {
        return res.status(500).json("Error while fetching jobs")
    }

}

module.exports = {getJobByID, listJob}