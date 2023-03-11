import axios from 'axios'
import { IUser, IUserObject } from '../model';


class UserService {

    http = axios.create({
        baseURL: "http://localhost:3500"
    })

    async getAllUser<IUser>() {
        const response = await this.http.get<IUser[]>('/users')
        return response?.data
    }

    async addNewUser(userObject: IUserObject) {
        const response = await this.http.post<IUserObject>('/users', userObject)
        return response?.data
    }

    async updateUser(userObject: IUserObject) {
        const response = await this.http.put<IUserObject>('/users', userObject)
        return response?.data
    }

    async deleteUser(id: number | string) {
        const response = await this.http.delete('/users/' + id)
        return response?.data
    }

}
export default new UserService