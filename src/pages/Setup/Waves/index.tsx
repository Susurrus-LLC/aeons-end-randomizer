import React from 'react'

import { Data } from '../../../data'

import Page from '../../../components/Page'

type PropTypes = {
  data: Data
  setData: Function
}

const Waves = (props: PropTypes) => (
  <Page>
    <h2>Content Waves</h2>
  </Page>
)

export default Waves
