const router = require('express').Router()
const cApi = require('../controlers/controler')


router.get('/home',cApi.home)






module.exports =router