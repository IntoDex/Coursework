const Router = require('express')
const router = new Router()
const ingController = require('../controllers/ingController')

router.post('/', ingController.create)
router.get('/', ingController.getAll)
router.delete('/', ingController.delete)

module.exports = router