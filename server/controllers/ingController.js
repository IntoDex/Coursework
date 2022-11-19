const { Ingredients } = require("../models/models")
const ApiError = require('../error/ApiError');

class IngController {
    async create(req, res) {
        const {name} = req.body
        const ingredients = await Ingredients.create({name})
        return res.status(201).json(ingredients)
    }

    async getAll(req, res) {
        const ingredients = await Ingredients.findAndCountAll() 
        return res.json(ingredients)
    }

    async delete(req, res) {
        const {id} = req.body
        const ingredients = await Ingredients.destroy({where: {id}})
        return res.json(ingredients)
    }

}

module.exports = new IngController()