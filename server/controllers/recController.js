const { Recepte, CateRec, IngRec } = require("../models/models")
const uuid = require('uuid')
const path = require('path');
const { json } = require("sequelize");
const ApiError = require('../error/ApiError');

async function caterecs(arr) {
    let caterec = await CateRec.findAll({attributes:['recepteId'], where: {categoryId: JSON.parse(arr)}})
    caterec = Array.from(new Set (caterec.map(e => e.dataValues.recepteId)))
    return caterec
}

async function ingrecs(arr) {
    let ingrec = await IngRec.findAll({attributes:['recepteId'], where: {ingredientId: JSON.parse(arr)}})
    ingrec = Array.from(new Set (ingrec.map(e => e.dataValues.recepteId)))
    return ingrec
}

function compairArr(arr1 = [], arr2 = []) {
    if(!arr1.length) {
        return arr2
    }
    if(!arr2.length) {
        return arr1
    }

    return arr1.filter(e => arr2.indexOf(e) > -1)
}

async function findrecepte(typeId, compArr, limit, offset) {
    let result = []
    if(typeId) {
        for(let i = 0; i < compArr.length; i++) {
            const t = await Recepte.findOne({where: {id:compArr[i], typeId}, limit, offset})
                if(t) {
                    result.push(t) 
                }
        }
    }
    else {
        for(let i = 0; i < compArr.length; i++) {
        const t = await Recepte.findOne({where: {id:compArr[i]}, limit, offset})
            if(t) {
                result.push(t) 
            }
        }
    }
    return result
}

async function retrecept(typeId, catId, ingId, limit, offset) {
    let result = []
    if(catId && ingId) {
        let c = await caterecs(catId)
        let i = await ingrecs(ingId)
        const compArr = compairArr(c, i)
        result = await findrecepte(typeId, compArr, limit, offset)
    }

    if(catId && !ingId) {
        let c = await caterecs(catId)
        const compArr = compairArr(c)
        result = await findrecepte(typeId, compArr, limit, offset)
    }

    if(!catId && ingId) {
        let i = await ingrecs(ingId)
        const compArr = compairArr(i)
        result = await findrecepte(typeId, compArr, limit, offset)
    }

    if(!catId && !ingId) {
        if(typeId) {
            result = await Recepte.findAll({where: {typeId}, limit, offset})
        }
        else {
            result = await Recepte.findAll({limit, offset})
        }
    }
    return result
}


class RecController {
    async create(req, res, next) {
        try{
        const {name, description, typeId, catId, ingId} = req.body
        // В Связующие таблицы
        const catjson = JSON.parse(catId)
        const ingjson = JSON.parse(ingId)
        //console.log(Array.isArray (JSON.parse (ingId)))
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const recepte = await Recepte.create({name, description, typeId, ingId, img: fileName})

        for(let i = 0; i < ingjson.length; i++) {
            await IngRec.create({recepteId: recepte.id, ingredientId: + ingjson[i]})
        } 

        for(let i = 0; i < catjson.length; i++) {
            await CateRec.create({recepteId: recepte.id, categoryId: + catjson[i]})
        } 

        return res.json(recepte)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }

    

    async getAll(req, res) {
        let {typeId, limit, page, catId, ingId} = req.query
        console.log(typeId, catId)
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let recepte = await retrecept(typeId, catId, ingId, limit, offset)
        
        return res.json({count:recepte.length,rows:recepte})
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