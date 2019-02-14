import React, { Component } from 'react'
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import '../styles/App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
      <h1>Temporary Placeholder</h1>
        <CreateLink />
      </div>
    );
  }
}