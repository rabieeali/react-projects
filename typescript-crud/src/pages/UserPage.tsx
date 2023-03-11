import { useParams } from "react-router-dom"
import { useUsers } from "../context/UserProvider"

const UserPage = () => {
    const { id } = useParams()
    // you can fetch it here but I already have the whole users in my context
    const { users } = useUsers()

    const foundUser = users.find(u => u.id == id)
    
    
    return (
        <div>UserPage</div>
    )
}

export default UserPage