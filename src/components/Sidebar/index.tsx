import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './sidebar.module.sass'

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true)
  const [sbClasses, setSbClasses] = useState<string>(styles.sidebar)

  useEffect(() => {
    if (open) {
      setSbClasses(`${styles.sidebar} ${styles.open}`)
    } else {
      setSbClasses(styles.sidebar)
    }
  }, [open])

  const toggleOpen = () => setOpen(!open)

  return (
    <div className={sbClasses}>
      <button type='button' onClick={toggleOpen}>
        Close
      </button>
      <ul>
        <li>
          <NavLink
            activeClassName={styles.active}
            exact
            to='/'
            onClick={toggleOpen}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            exact
            to='/nemesis'
            onClick={toggleOpen}
          >
            Nemesis
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            exact
            to='/mages'
            onClick={toggleOpen}
          >
            Mages
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            exact
            to='/supply'
            onClick={toggleOpen}
          >
            Supply
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            exact
            to='/nemesis-cards'
            onClick={toggleOpen}
          >
            Nemesis Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            exact
            to='/setup'
            onClick={toggleOpen}
          >
            Setup
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles.active}
            exact
            to='/about'
            onClick={toggleOpen}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
