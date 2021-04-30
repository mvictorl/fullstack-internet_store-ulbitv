import { $authHost, $host } from './index'

export async function createType(type) {
	const { data } = await $authHost.post('api/type', type)
	return data
}

export async function fetchTypes() {
	const { data } = await $host.get('api/type')
	return data
}

// export async function check() {
// 	const { data } = await $authHost.post('api/user/auth')
// 	localStorage.setItem('token', data.token)
// 	return jwt_decode(data.token)
// }
