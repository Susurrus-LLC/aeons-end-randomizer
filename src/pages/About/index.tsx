import React from 'react'

import Page from '../../components/Page'

import Data from '../../data'

import AppInfo from './AppInfo'

const About = () => {
  const listSets = () =>
    Data.SETS.filter(set => set.code !== 'PM').map(set => (
      <React.Fragment key={set.code}>
        <cite>{set.set}</cite>,{' '}
      </React.Fragment>
    ))

  return (
    <Page>
      <h2>About</h2>
      <p>
        Aeon&rsquo;s End Randomizer is an unofficial app that can be used to
        randomize the setup for a game of Aeon&rsquo;s End. It will allow you to
        randomize your mage selection, nemesis selection, nemesis deck
        construction, and supply selection.
      </p>
      <h3>Supported Content</h3>
      <p>
        Aeon&rsquo;s End Randomizer supports all official content released so
        far, including {listSets()} and all promo cards.
      </p>
      <h3>Aeon&rsquo;s End Copyright</h3>
      <p>
        Aeon&rsquo;s End, by{' '}
        <a
          href='https://www.indieboardsandcards.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Indie Boards &amp; Cards
        </a>{' '}
        and{' '}
        <a
          href='https://www.actionphasegames.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          ActionPhase Games
        </a>
        , is copyrighted &copy; 2016&ndash;2019 by Lone Oak Games. All rights
        are reserved. The official randomizer app is available on{' '}
        <a
          href='https://www.actionphasegames.com/pages/aerandomizer'
          target='_blank'
          rel='noopener noreferrer'
        >
          ActionPhase Games&rsquo; website
        </a>
        .
      </p>
      <h3>App Copyright</h3>
      <p>
        Version {AppInfo.version}. This app was built by{' '}
        <a href={AppInfo.authorUrl} target='_blank' rel='noopener noreferrer'>
          {AppInfo.author}
        </a>
        , copyright &copy; {AppInfo.years()} under the{' '}
        <a
          href={`${AppInfo.ghUrl}/blob/master/LICENSE`}
          target='_blank'
          rel='noopener noreferrer'
        >
          AGPL-3.0 license
        </a>
        . The source code is available{' '}
        <a href={AppInfo.ghUrl} target='_blank' rel='noopener noreferrer'>
          on GitHub
        </a>
        .
      </p>
    </Page>
  )
}

export default About
