import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css'

// Components
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import Header from './Header'
import Login from './Login'

export default class App extends Component {
  render() {
    return (
      <div className='center w85'>
      <Header />
        <div className='ph3 pv1 background-gray'>

        <Switch>
            <Route exact path='/' component={LinkList} />
            <Route exact path='/create' component={CreateLink} />
            <Route exact path="/login" component={Login} />
        </Switch>

        </div>
      </div>
    )
  }
}