import React from 'react'

import { Data } from '../../data'

type PropTypes = {
  data?: Data,
  children: React.ReactNode
}

const Page = (props: PropTypes) => (
  <React.Fragment>
    {props.children}
  </React.Fragment>
)

export default Page
