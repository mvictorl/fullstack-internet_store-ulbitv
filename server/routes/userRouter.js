const Router = require('express')
const userController = require('../controllers/userController')
const auth = require('../middleware/authMiddleware')

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', auth, userController.check)

// TODO: implement later
// router.delete('/:id', )

module.exports = router
