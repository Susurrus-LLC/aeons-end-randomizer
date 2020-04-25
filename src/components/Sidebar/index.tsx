import React, { useState, MouseEvent, useRef } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './sidebar.module.sass'

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen(!open)

  const handleClickOutside = (e: MouseEvent) =>
    e.target === overlayRef.current ? toggleOpen() : null

  const overlayRef = useRef(null)
  const sidebarRef = useRef(null)

  return open ? (
    <aside
      className={styles.modal}
      onClick={handleClickOutside}
      ref={overlayRef}
    >
      <div className={`${styles.sidebar} ${styles.sb}`} ref={sidebarRef}>
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
    </aside>
  ) : (
    <div className={`${styles.toggle} ${styles.sb}`}>
      <button className={styles.menuButton} type='button' onClick={toggleOpen}>
        Menu
      </button>
    </div>
  )
}

export default Sidebar
