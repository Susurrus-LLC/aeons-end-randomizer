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
        <button
          className={styles.closeButton}
          type='button'
          onClick={toggleOpen}
        >
          Close
        </button>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              exact
              to='/'
              onClick={toggleOpen}
            >
              <div className={styles.navBlock}>Home</div>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              exact
              to='/nemesis'
              onClick={toggleOpen}
            >
              <div className={styles.navBlock}>Nemesis</div>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              exact
              to='/mages'
              onClick={toggleOpen}
            >
              <div className={styles.navBlock}>Mages</div>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              exact
              to='/supply'
              onClick={toggleOpen}
            >
              <div className={styles.navBlock}>Supply</div>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              exact
              to='/nemesis-cards'
              onClick={toggleOpen}
            >
              <div className={styles.navBlock}>Nemesis Cards</div>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              exact
              to='/setup'
              onClick={toggleOpen}
            >
              <div className={styles.navBlock}>Setup</div>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.active}
              exact
              to='/about'
              onClick={toggleOpen}
            >
              <div className={styles.navBlock}>About</div>
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
