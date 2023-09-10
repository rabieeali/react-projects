import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"


const SINGLE_USER_QUERY = gql`
    query GetSingleUser($id:ID!) {
        user(id:$id){
            id
            name
            username
            email
        }
    }
`

export default function UserPage() {
    const { id } = useParams()
    const { data, loading, error } = useQuery(SINGLE_USER_QUERY, {
        variables: { id }
    })

    const { name, username, email } = data?.user ?? ''

    if (loading) return <p>Loading ...</p>
    if (error) return <p>{error.toString()}</p>

    return (
        <div className="container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}
