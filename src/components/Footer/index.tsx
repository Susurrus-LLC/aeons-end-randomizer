import React from 'react'

import AppInfo from '../../pages/About/AppInfo'

import styles from './footer.module.sass'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.block}>
      <p className={styles.copyright}>Aeon&rsquo;s End, by <a href='https://www.indieboardsandcards.com/' target='_blank' rel='noopener noreferrer'>Indie Boards &amp; Cards</a> and <a href='https://www.actionphasegames.com/' target='_blank' rel='noopener noreferrer'>ActionPhase Games</a>, is copyrighted &copy; 2016&ndash;2019 by Lone Oak Games, all rights reserved. The official randomizer app is available on <a href='https://www.actionphasegames.com/pages/aerandomizer' target='_blank' rel='noopener noreferrer'>ActionPhase&rsquo;s website</a>.</p>
    </div>
    <div className={styles.block}>
      <p className={styles.copyright}>Version {AppInfo.version}, built by <a href={AppInfo.authorUrl} target='_blank' rel='noopener noreferrer'>{AppInfo.author}</a>, copyright &copy; {AppInfo.years()} under the <a href={`${AppInfo.ghUrl}/blob/master/LICENSE`} target='_blank' rel='noopener noreferrer'>AGPL-3.0 license</a>. The source code is available <a href={AppInfo.ghUrl} target='_blank' rel='noopener noreferrer'>on GitHub</a>.</p>
    </div>
  </footer>
)

export default Footer
