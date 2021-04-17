const Router = require('express')
const brandRouter = require('./brandRouter')
const deviceRouter = require('./deviceRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')


const router = new Router()

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router
