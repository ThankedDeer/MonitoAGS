import axios from "axios"
const BASE_URL = 'http://localhost:8000/'

export const instance = axios.create({
    baseURL: BASE_URL
})

axios.interceptors.request.use(
    (config) => {
    return config 
},
error => {
    return Promise.reject(error)
}
)