import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4500'

export class AuthService {
    login = async (email, password) => {
        const { data } = await axios.post('auth', { email, password })
        return data
    }

    reAuth = async (token) => {
        const { data } = await axios.get('re-auth', { headers: { 'Authorization': token } })
        return data
    }
}