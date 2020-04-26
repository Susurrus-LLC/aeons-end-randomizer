import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { Data } from '../../data'

import Page from '../../components/Page'

import Sets from './Sets'
import Customization from './Sets/Customization'

export type PropTypes = {
  data: Data
  setData: Function
}

const Setup = (props: PropTypes) => {
  let { path } = useRouteMatch()

  return (
    <Page>
      <h2>Choose the Content You&rsquo;ll Use</h2>
      <Switch>
        <Route exact path={path}>
          <Sets data={props.data} setData={props.setData} />
        </Route>
        <Route exact path={`${path}/:wave`}>
          <Customization data={props.data} setData={props.setData} />
        </Route>
      </Switch>
    </Page>
  )
}

export default Setup
