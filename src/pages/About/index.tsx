import React from 'react'

import Page from '../../components/Page'

import AppInfo from './AppInfo'

const About = () => (
  <Page>
    <h2>About</h2>
    <h3>Aeon&rsquo;s End Copyright</h3>
    <p>Aeon&rsquo;s End, by <a href='https://www.indieboardsandcards.com/' target='_blank' rel='noopener noreferrer'>Indie Boards &amp; Cards</a> and <a href='https://www.actionphasegames.com/' target='_blank' rel='noopener noreferrer'>ActionPhase Games</a>, is copyrighted &copy; 2016&ndash;2019 by Lone Oak Games. All rights are reserved. The official randomizer app is available on <a href='https://www.actionphasegames.com/pages/aerandomizer' target='_blank' rel='noopener noreferrer'>ActionPhase Games&rsquo; website</a>.</p>
    <h3>App Copyright</h3>
    <p>Version {AppInfo.version}. This app was built by <a href={AppInfo.authorUrl} target='_blank' rel='noopener noreferrer'>{AppInfo.author}</a>, copyright &copy; {AppInfo.years()} under the <a href={`${AppInfo.ghUrl}/blob/master/LICENSE`} target='_blank' rel='noopener noreferrer'>AGPL-3.0 license</a>. The source code is available <a href={AppInfo.ghUrl} target='_blank' rel='noopener noreferrer'>on GitHub</a>.</p>
  </Page>
)

export default About
