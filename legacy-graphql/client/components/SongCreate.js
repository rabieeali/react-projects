import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchSongs'


class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { title: '' }
    }


    submitHandler(e) {
        e.preventDefault()
        this.props.mutate({
            variables: { title: this.state.title },
            refetchQueries: [{ query }]
        })
            .then(() => this.setState({ title: '' }))
            .then(() => hashHistory.push('/'))
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <Link to='/'>{'<'} Back</Link>
                <h3>Create a New Song!</h3>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <label htmlFor="song">Song Title</label>
                    <input
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })} />
                    <button className='btn green'>create</button>
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddSong($title:String) {
        addSong(title:$title){
            id
            title
        }
    }
`

export default graphql(mutation)(SongCreate)