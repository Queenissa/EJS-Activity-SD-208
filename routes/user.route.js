const express = require('express')
const router = express.Router()

const {userLoginPage, userRegisterPage, userRegister, userLogin } = require('../controllers/user.controller')

router.get('/login',  userLoginPage)
router.get('/register', userRegisterPage)
router.post('/register', userRegister)
router.post('/login', userLogin)

module.exports = router;