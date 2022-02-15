const express = require('express')
const { getCostumers, createCostumer } = require('../controllers/constumer')
const router = express.Router()

router.route('/').get(getCostumers).post(createCostumer)

module.exports = router