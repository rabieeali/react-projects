import React from "react"
import { graphql } from 'react-apollo'
import Spinner from "./Spinner"
import { Link } from 'react-router'
import query from '../queries/fetchSongs'
import gql from 'graphql-tag'

const SongList = (props) => {
    const { songs, loading, refetch } = props.data
    const { mutate } = props

    const deleteHandler = (id) => {
        mutate({ variables: { id } })
        .then(() => refetch())
    }

    if (loading) return <Spinner />
    return (
        <div>
            <div>
                <ul className="collection">
                    {songs.map(song => (
                        <li style={{ display: 'flex', justifyContent: 'space-between' }} className="collection-item" key={song.id}>
                            <span>{song.title}</span>
                            <span onClick={() => deleteHandler(song.id)} style={{ cursor: 'pointer', color: 'red' }}><i className="material-icons">delete</i></span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Link to='/songs/new' className='btn-floating btn-large red right'>
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}

const mutation = gql`
        mutation DeleteSong($id:ID){
            deleteSong(id:$id){
                id
            }
        }
`

export default graphql(mutation)(graphql(query)(SongList))