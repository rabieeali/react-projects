import axios from 'axios'
import { IUser, IUserObject } from '../model';


class UserService {
    http = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
    })

    async getAllUser() {
        const response = await this.http.get<IUser[]>('/users')
        return response?.data
    }

    async AddNewUser(userObject: IUserObject) {
        const response = await this.http.post<IUserObject>('/users', userObject)
        return response?.data

    }

}
export default new UserService