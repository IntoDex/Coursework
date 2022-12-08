const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth',authMiddleware, userController.check )

// Избранное
router.post('/favorite', authMiddleware, userController.addFav)
router.get('/favorite', authMiddleware, userController.checkFav)
router.delete('/favorite/:id', authMiddleware, userController.delFav)
router.post('/isfavorite', authMiddleware, userController.isFavorite)




module.exports = router