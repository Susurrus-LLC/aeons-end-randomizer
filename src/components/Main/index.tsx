import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from '../../pages/About'
import Home from '../../pages/Home'
import Mages from '../../pages/Mages'
import Nemesis from '../../pages/Nemesis'
import NemesisCards from '../../pages/NemesisCards'
import NotFound from '../../pages/NotFound'
import Setup from '../../pages/Setup'
import Supply from '../../pages/Supply'

import styles from './main.module.sass'

const Main = () => {
  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/nemesis'>
          <Nemesis />
        </Route>
        <Route path='/mages'>
          <Mages />
        </Route>
        <Route path='/supply'>
          <Supply />
        </Route>
        <Route path='/nemesis-cards'>
          <NemesisCards />
        </Route>
        <Route path='/setup'>
          <Setup />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </main>
  )
}

export default Main
