
import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

const USERS_QUERY = gql`
query {
  users {
    data {
      id
      name
      username
    }
  }
}
`

export default function Homepage() {
    const { data, loading, error } = useQuery(USERS_QUERY, {
        variables: {},
        errorPolicy: 'all'
    })
    const users = data?.users?.data

    if (loading) return <p>Loading ...</p>
    if (error) return <p>{error.toString()}</p>
    return (
        <div className='container'>
            <section className='row'>
                {users.map((user) => (
                    <article className='col-md-4 g-3 card' key={user.id}>
                        <h4>{user.name}</h4>
                        <small>{user.username}</small>
                        <Link to={`user/${user.id}`}>see user</Link>
                    </article>
                ))}
            </section>
        </div>
    )
}
