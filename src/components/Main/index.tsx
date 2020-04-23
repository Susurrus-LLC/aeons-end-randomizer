import React, { useState } from 'react'

import Form from './Form'
import Results from './Results'

import './main.sass'

const Main = () => {
  const [data, setData] = useState(null)

  return (
    <main className='main'>
      <Form setData={data => setData(data)} />
      <Results data={data} />
    </main>
  )
}

export default Main
