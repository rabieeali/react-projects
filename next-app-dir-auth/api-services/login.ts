import axios from 'axios'
const baseUrl = 'https://reqres.in'


export const login = async (isLocal: boolean, credentials: { email: string, password: string }) => {
    const endpoint = isLocal ? '/api/login' : `${baseUrl}/api/login`
    const response = await axios.post(endpoint, credentials)
    return response.data
}