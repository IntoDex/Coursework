const Router = require('express')
const recController = require('../controllers/recController')
const router = new Router()

router.post('/', recController.create )
router.get('/',)
router.get('/:id',)
router.delete('/',)

module.exports = router