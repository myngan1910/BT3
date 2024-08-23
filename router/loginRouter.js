const express = require('express')
const router = express.Router();
const login = require('../controller/loginController.js')


    router.get('/login', login.login);
    router.post('/login', login.postLogin);
    router.get('/logout', login.logout);
    module.exports = router;

