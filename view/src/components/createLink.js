import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`

export default class CreateLink extends Component {
    state = {
        url: '',
        description: ''
    }

    render() {
        const { description, url } = this.state
        return (
            <div className='createLink'>
                <div className='inputContainer'>
                    <input
                        type='text'
                        placeholder='The description for the link here.'
                        value={description}
                        onChange={e => this.setState({ description: e.target.value })}
                    />

                    <input
                        type='text'
                        placeholder='The URL for the link here.'
                        value={url}
                        onChange={e => this.setState({ url: e.target.value })}
                    />
                    
                </div>
                    <Mutation mutation={POST_MUTATION} 
                    variables={{description, url}}
                    onCompleted={() => this.props.history.push('/')}
                    >
                        {postMutation => <button onClick={postMutation}>Submit</button>}
                    </Mutation>
            </div >
        )
    }
}