import React from 'react'
import { Link } from 'react-router-dom'

import AppInfo from '../../pages/About/AppInfo'

import styles from './footer.module.sass'

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>Version {AppInfo.version}, built by <a href={AppInfo.authorUrl} target='_blank' rel='noopener noreferrer'>{AppInfo.author}</a>, copyright &copy; {AppInfo.years()} under the <a href={`${AppInfo.ghUrl}/blob/master/LICENSE`} target='_blank' rel='noopener noreferrer'>AGPL-3.0 license</a>. <Link to='/about'>About this app.</Link></p>
  </footer>
)

export default Footer
