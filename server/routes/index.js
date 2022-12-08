const Router = require('express')
const router = new Router()
const catRouter = require('./catRouter')
const ingRouter = require('./ingRouter')
const recRouter = require('./recRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/rec', recRouter)
router.use('/ing', ingRouter)
router.use('/cat', catRouter)


module.exports = router