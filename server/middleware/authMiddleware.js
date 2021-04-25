const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	if (req.method === 'OPTION') {
		next()
	}
	try {
		const token = req.headers.authorization.split(' ')[1] // "Bearer A23FG345..."
		if (!token) {
			return res.status(401).json({ message: 'Пользователь не авторизован' })
		}
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		req.user = decoded
		/* decoded = {
      id: 2,
      email: 'user@yandex.ru',
      role: 'ADMIN',
      iat: 1619093859,
      exp: 1619180259
    } */
		next()
	} catch (e) {
		res.status(401).json({ message: 'Пользователь не авторизован' })
	}
}
