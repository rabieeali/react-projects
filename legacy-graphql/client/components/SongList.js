import React from "react"
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Spinner from "./Spinner"

const SongList = (props) => {
    const { songs, loading } = props.data

    if (loading) return <Spinner />
    return (
        <div>
            <ul className="collection">
                {songs.map(song => (
                    <li className="collection-items" key={song.id}>{song.title}</li>
                ))}
            </ul>
        </div>
    )
}

// does not execute! just define the query
const query = gql`
{
    songs {
        id
        title
    }
}
`;

export default graphql(query)(SongList)