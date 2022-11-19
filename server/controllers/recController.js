const { Recepte } = require("../models/models")

class RecController {
    async create(req, res) {

    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {

    }

    async delete(req, res) {
        const {id} = req.body
        const recepte = await Recepte.destroy({where: {id}})
        return res.json(recepte)
    }

}

module.exports = new RecController()