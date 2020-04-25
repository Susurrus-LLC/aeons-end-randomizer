import React from 'react'

import styles from './footer.module.sass'

const Footer = () => {
  const start = 2019
  const now = new Date().getFullYear()
  const years = () => {
    if (start === now) {
      return start
    } else {
      return `${start}–${now}`
    }
  }
  
  const version = '1.0.1'

  return (
    <footer className={styles.footer}>
      <div className={`${styles.block} ${styles.aeBlock}`}>
        <p className={`${styles.copyright} ${styles.aeCopyright}`}>Aeon&rsquo;s End, by <a href='https://www.indieboardsandcards.com/' target='_blank' rel='noopener noreferrer'>Indie Boards &amp; Cards</a> and <a href='https://www.actionphasegames.com/' target='_blank' rel='noopener noreferrer'>ActionPhase Games</a>, is copyrighted &copy; 2016&ndash;2019 by Lone Oak Games, all rights reserved. The official randomizer app is available on <a href='https://www.actionphasegames.com/pages/aerandomizer' target='_blank' rel='noopener noreferrer'>ActionPhase&rsquo;s website</a>.</p>
      </div>
      <div className={`${styles.block} ${styles.pgBlock}`}>
        <p className={`${styles.copyright} ${styles.pgCopyright}`}>Version <a href='https://github.com/Susurrus-LLC/aeons-end-randomizer/blob/master/CHANGELOG.md' target='_blank' rel='noopener noreferrer'>{version}</a>. Built by <a href='https://github.com/nai888' target='_blank' rel='noopener noreferrer'>Ian A.&nbsp;Cook</a>, copyright &copy; {years()} under the <a href='https://github.com/Susurrus-LLC/aeons-end-randomizer/blob/master/LICENSE' target='_blank' rel='noopener noreferrer'>AGPL-3.0 license</a>. The source code is available <a href='https://github.com/Susurrus-LLC/aeons-end-randomizer' target='_blank' rel='noopener noreferrer'>on GitHub</a>.</p>
      </div>
    </footer>
  )
}

export default Footer
