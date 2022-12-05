const Router = require('express')
const recController = require('../controllers/recController')
const router = new Router()

router.post('/', recController.create )
router.get('/', recController.getAll)
router.get('/:id', recController.getOne)
router.delete('/:id', recController.delete)

module.exports = router