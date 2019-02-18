import React, { Component } from 'react'
import { Router, Switch } from 'react-router-dom'
import '../styles/App.css'

// Components
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import Header from './Header'

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