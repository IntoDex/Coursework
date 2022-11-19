const Router = require('express')
const router = new Router()
const catController = require('../controllers/catController')

router.post('/', catController.create)
router.get('/', catController.getAll)
router.delete('/', catController.delete)

module.exports = router