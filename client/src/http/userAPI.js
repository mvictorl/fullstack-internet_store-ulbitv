import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export async function registration(email, password, role) {
	const { data } = await $host.post('api/user/registration', {
		email,
		password,
		role
	})
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export async function login(email, password) {
	const { data } = await $host.post('api/user/login', { email, password })
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export async function check() {
	const { data } = await $authHost.get('api/user/auth')
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}
