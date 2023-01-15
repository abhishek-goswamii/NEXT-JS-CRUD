const express = require('express')
const router = express.Router()
const {createUser,deleteUser,updateUser,allUsers} = require('./userControllers')

router.route('/').get(allUsers).post(createUser)
router.post('/delete', deleteUser)
router.post('/update', updateUser)

module.exports = router



















