import { $host } from './index'
import jwt_decode from 'jwt-decode'

export async function registration(email, password) {
	const { data } = await $host.post('api/user/registration', {
		email,
		password,
		role: 'ADMIN'
	})
	return jwt_decode(data.token)
}

export async function login(email, password) {
	const { data } = await $host.post('api/user/login', { email, password })
	return jwt_decode(data.token)
}

export async function check() {
	return await $host.post('api/user/registration')
}
