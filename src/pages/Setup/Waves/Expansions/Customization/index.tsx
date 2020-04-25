import React from 'react'
import { useParams } from 'react-router-dom'

import { Data } from '../../../../../data'

import Page from '../../../../../components/Page'

type PropTypes = {
  data: Data
  setData: Function
}

const Customization = (props: PropTypes) => {
  let { wave } = useParams()
  return (
    <Page>
      <h4>Customize Content for {wave}</h4>
    </Page>
  )
}

export default Customization
