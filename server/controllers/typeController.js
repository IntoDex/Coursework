const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.status(201).json(type)
    }

    async getAll(req, res) {
        const type = await Type.findAndCountAll() 
        return res.json(type)
    }

    async delete(req, res) {
        const {id} = req.body
        const type = await Type.destroy({where: {id}})
        return res.json(type)
    }

}

module.exports = new TypeController()