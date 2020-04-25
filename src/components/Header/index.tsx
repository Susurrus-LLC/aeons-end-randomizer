import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.sass'

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link to='/' className={styles.titleLink}>
        Aeon&rsquo;s End Randomizer
      </Link>
    </h1>
  </header>
)

export default Header
