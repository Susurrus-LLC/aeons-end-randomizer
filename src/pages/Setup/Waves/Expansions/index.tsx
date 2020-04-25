import React from 'react'
import { useParams } from 'react-router-dom'

import { Data } from '../../../../data'

import Page from '../../../../components/Page'

type PropTypes = {
  data: Data
  setData: Function
}

const Expansions = (props: PropTypes) => {
  let { wave } = useParams()

  console.log(wave)

  return (
    <Page>
      <h3>Choose Expansions for {wave}</h3>
    </Page>
  )
}

export default Expansions
