import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css/normalize.css'

import styles from './App.module.sass'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router basename='aeons-end-randomizer'>
      <div className={styles.App}>
        <Header />
        <Main />
        <Footer />
      </div>
      <Sidebar />
    </Router>
  )
}

export default App
