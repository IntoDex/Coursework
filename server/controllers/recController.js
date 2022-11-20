const { Recepte } = require("../models/models")
const uuid = require('uuid')
const path = require('path');
const { json } = require("sequelize");
const ApiError = require('../error/ApiError');

class RecController {
    async create(req, res) {
        try{
        const {name, description} = req.body
        //console.log(Array.isArray (JSON.parse (ingId)))
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const recepte = await Recepte.create({name, description, img: fileName})

        return res.json(recepte)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
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