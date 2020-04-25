import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import data, { Data } from '../../data'

import styles from './main.module.sass'

const DEFAULTDATA = data.DEFAULTDATA

const Main = () => {
  const [data, setData] = useState<Data>(DEFAULTDATA)

  return (
    <main className={styles.main}>
      <Switch>
        <Route path='/nemesis'>
          <p>Nemesis Page</p>
        </Route>
        <Route path='/mages'>
          <p>Mages Page</p>
        </Route>
        <Route path='/supply'>
          <p>Supply Page</p>
        </Route>
        <Route path='/nemesis-cards'>
          <p>Nemesis Cards Page</p>
        </Route>
        <Route path='/setup'>
          <p>Setup Page with subroutes</p>
        </Route>
        <Route path='/about'>
          <p>About Page</p>
        </Route>
        <Route path='/'>
          <p>Home Page</p>
        </Route>
      </Switch>
    </main>
  )
}

export default Main
