const express = require('express')
const router = express.Router()
const { createUser, getUserByID, listUser,deleteUser } = require('../controllers/users.controller.js')

router.post('/create-user', createUser)
router.get('/user/:id', getUserByID)
router.get('/list-user', listUser)
router.delete('/user/:id', deleteUser)

module.exports = router
