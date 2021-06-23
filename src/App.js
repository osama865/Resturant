import React from 'react'
import "./App.css"
import client from './contentful/contentful'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { About, Error, Home, Location, Menu,Contact } from './components'


export default function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/location' component={Location} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route  component={Error} />
      </Switch>
    </Router>
    </>
  )
}

