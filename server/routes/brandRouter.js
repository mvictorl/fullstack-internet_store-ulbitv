const Router = require('express')
const brandController = require('../controllers/brandController')

const router = new Router()

router.post('/', brandController.create)
router.get('/', brandController.getAll)

// TODO: implement later
// router.delete('/:id', )

module.exports = router
