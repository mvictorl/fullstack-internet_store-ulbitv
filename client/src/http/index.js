import axios from 'axios'

// Request without authorization
export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

// Request with authorization
export const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

function authInterceptor(config) {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)
