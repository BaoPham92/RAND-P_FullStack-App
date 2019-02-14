import React, { Component } from 'react'

class CreateLink extends Component {
    constructor() {
        this.state = {
            url: '',
            description: ''
        }
    }

    render() {
        return (
            <div className={'createLink'}>
                <input 
                    type='text'
                    placeholder='The description for the link here.'
                    value={this.description}
                    onChange={ (e) => this.setState({ description: e.target.value }) }
                />

                <input 
                    type='text'
                    placeholder='The URL for the link here.'
                    value={this.url}
                    onChange={ e => this.setState({ url: e.target.value }) }
                />

                {/* Adjust onSubmit for mutations */}
                <button>Submit</button>
            </div>
        )
    }
}