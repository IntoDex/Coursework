const {Category} = require('../models/models')
const ApiError = require('../error/ApiError');

class CatController {
    async create(req, res) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.status(201).json(category)
    }

    async getAll(req, res) {
        const category = await Category.findAndCountAll() 
        return res.json(category)
    }

    async delete(req, res) {
        const {id} = req.body
        const category = await Category.destroy({where: {id}})
        return res.json(category)
    }

}

module.exports = new CatController()