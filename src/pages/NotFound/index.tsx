import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Page from '../../components/Page'
import styles from '../../components/Page/page.module.sass'

const NotFound = () => {
  let history = useHistory()

  return (
    <Page>
      <p>You seem to have fallen into a breach and gotten lost in the void. That page doesn&rsquo;s exist here.</p>
      <p>Why don&rsquo;t you try returning back <Link to='/'>Home</Link>? You could also <button className={styles.buttonLink} type='button' onClick={() => history.goBack()}>go back</button> and try to retrace your steps.</p>
    </Page>
  )
}

export default NotFound
