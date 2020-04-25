import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import ButtonLink from '../../components/ButtonLink'
import Page from '../../components/Page'

const NotFound = () => {
  let history = useHistory()

  return (
    <Page>
      <p>
        You seem to have fallen into a breach and gotten lost in the void. That
        page doesn&rsquo;t exist here.
      </p>
      <p>
        Why don&rsquo;t you try returning back <Link to='/'>Home</Link>? You
        could also{' '}
        <ButtonLink onClick={() => history.goBack()}>go back</ButtonLink> and
        try to retrace your steps.
      </p>
    </Page>
  )
}

export default NotFound
