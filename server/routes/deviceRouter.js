const Router = require('express')
const deviceController = require('../controllers/deviceController')

const router = new Router()

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
// TODO: implement later
// router.delete('/:id', )

module.exports = router
