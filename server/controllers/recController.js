const { Recepte, CateRec } = require("../models/models")
const uuid = require('uuid')
const path = require('path');
const { json } = require("sequelize");
const ApiError = require('../error/ApiError');

class RecController {
    async create(req, res, next) {
        try{
        const {name, description, typeId, catId} = req.body
        const catjson = JSON.parse(catId)
        //console.log(Array.isArray (JSON.parse (ingId)))
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const recepte = await Recepte.create({name, description, typeId, img: fileName})
        for(let i = 0; i < catjson.length; i++) {
            await CateRec.create({recepteId: recepte.id, categoryId: + catjson[i]})
        } 

        return res.json(recepte)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }

    

    async getAll(req, res) {
        let {typeId, limit, page, catId} = req.query
        console.log(typeId, catId)
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let recepte;
        let result = []
        if(typeId && catId) {
            let caterec = await CateRec.findAll({attributes:['recepteId'], where: {categoryId: JSON.parse(catId)}})
            console.log(caterec)
            caterec = Array.from(new Set (caterec.map(e => e.dataValues.recepteId)))
            
            for(let i = 0; i < caterec.length; i++) {
                const t = await Recepte.findOne({where: {id:caterec[i], typeId}})
                result.push(t)
            }
           
        }

        if(!typeId && catId) {
            let caterec = await CateRec.findAll({attributes:['recepteId'], where: {categoryId: JSON.parse(catId)}})
            console.log(caterec)
            caterec = Array.from(new Set (caterec.map(e => e.dataValues.recepteId)))
            
            for(let i = 0; i < caterec.length; i++) {
                const t = await Recepte.findOne({where: {id:caterec[i]}})
                result.push(t)
            }
        }

        if(typeId && !catId) {

            result = await Recepte.findAll({where: {typeId}, limit, offset})
        }

        if(!typeId && !catId) {
            result = await Recepte.findAll({limit, offset})
        }

        return res.json({count:result.length,rows:result})
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