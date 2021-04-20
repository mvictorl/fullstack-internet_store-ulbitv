import { $host } from './index'

export async function registration(email, password) {
  return await $host.post('api/user/registration', { email, password, role: 'ADMIN' })
}

export async function login(email, password) {
  return await $host.post('api/user/login', { email, password })
}

export async function check() {
  return await $host.post('api/user/registration')
}

