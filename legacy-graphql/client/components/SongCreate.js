import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { title: '' }
    }


    submitHandler(e) {
        e.preventDefault()
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Create a New Song!</h3>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <label htmlFor="song">Song Title</label>
                    <input
                        value={this.state.title}
                        onChange={e => this.setState({ title: e.target.value })} />
                    <button>create</button>
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