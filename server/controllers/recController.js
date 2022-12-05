const { Recepte, IngRec, Ingredients, Type, Category } = require("../models/models")
const uuid = require('uuid')
const path = require('path');
const { json } = require("sequelize");
const ApiError = require('../error/ApiError');

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

async function findrecepte(typeId, categoryId, compArr, limit, offset) {
    let result = []
    let loffset = compArr.length < (+limit)+(+offset) ?compArr.length:(+limit)+(+offset)
    if(typeId && !categoryId) {
        for(let i = offset; i < loffset; i++) {
            
            const t = await Recepte.findOne({where: {id:compArr[i], typeId}})
                if(t) {
                    result.push(t) 
                }
        }
    }
    if(!typeId && categoryId) {
        for(let i = offset; i < loffset; i++) {
            
            const t = await Recepte.findOne({where: {id:compArr[i], categoryId}})
                if(t) {
                    result.push(t) 
                }
        }
    }
    if(typeId && categoryId) {
        for(let i = offset; i < loffset; i++) {
            
            const t = await Recepte.findOne({where: {id:compArr[i], typeId, categoryId}})
                if(t) {
                    result.push(t) 
                }
        }
    }
    if(!typeId && !categoryId) {
        for(let i = offset; i < loffset; i++) {
        const t = await Recepte.findOne({where: {id:compArr[i]}})
            if(t) {
                result.push(t) 
            }
        }
    }
    return result
}

async function retrecept(typeId, categoryId, ingId, limit, offset) {
    let result = []
    if(ingId) {
        let i = await ingrecs(ingId)
        const compArr = compairArr(i)
        result = await findrecepte(typeId, categoryId, compArr, limit, offset)
        result = { count: compArr.length, rows: result }
    }

    if(!ingId) {
        if(typeId && categoryId) {
            result = await Recepte.findAndCountAll({where: {typeId, categoryId}, limit, offset})
        }
        if(!typeId && categoryId) {
            result = await Recepte.findAndCountAll({where: {categoryId}, limit, offset})
        }
        if(typeId && !categoryId) {
            result = await Recepte.findAndCountAll({where: {typeId}, limit, offset})
        }
        if(!typeId && !categoryId) {
            result = await Recepte.findAndCountAll({limit, offset})
        }
    }
    return result
}


class RecController {
    async create(req, res, next) {
        try{
        const {name, description, typeId, catId, ingId} = req.body
        // В Связующие таблицы
        
        let ingjson = JSON.parse(ingId)
        ingjson = ingjson.map(e => e.title)
        const ingIds = await Ingredients.findAll({attributes:["id"], where:{name: ingjson}})
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const recepte = await Recepte.create({name, description, typeId, categoryId:catId, ingIds, img: fileName})

        for(let i = 0; i < ingIds.length; i++) {
            await IngRec.create({recepteId: recepte.id, ingredientId: + ingIds[i].id})
        } 

        return res.json(recepte)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }

    

    async getAll(req, res) {
        let {name, typeId, categoryId, limit, page, ingId} = req.query
        
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let recepte = await retrecept(typeId, categoryId, ingId, limit, offset)

        // Топорный поиск по названию 
        if(name) {
            recepte = await Recepte.findAndCountAll({where: {name}, limit, offset})
        }
        return res.json(recepte)
    }

    async getOne(req, res) {
        const {id} = req.params
        const recepte = await Recepte.findOne({where: {id}

            //include: [{model: CateRec, as: 'categoryId'}]
            //include: [{model: IngRec, as: 'ingredientId'}]
        })
        const type = await Type.findByPk(recepte.typeId)
        const cats = await Category.findByPk(recepte.categoryId)
        const ingIds = await IngRec.findAll({attributes:["ingredientId"], where: {recepteId: recepte.id}})
        const ings = await Ingredients.findAll({attributes:["id", "name"], where: {id:ingIds.map(e => e.ingredientId)}})

        return res.json({recepte, type, cats, ings})
    }

    async delete(req, res) {
        const {id} = req.params
        const recepte = await Recepte.destroy({where: {id}})
        return res.json(recepte)
    }

}

module.exports = new RecController()