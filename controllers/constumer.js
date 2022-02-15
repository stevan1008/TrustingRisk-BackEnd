const Costumer = require('../models/Costumer')

const getCostumers = async (req, res) => {
    try {
        const costumers = await Costumer.find({})
        res.status(200).json({ costumers })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const createCostumer = async (req, res) => {
    try {
        const costumer = await Costumer.create(req.body)
        res.status(201).json({ costumer })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = { getCostumers, createCostumer }

