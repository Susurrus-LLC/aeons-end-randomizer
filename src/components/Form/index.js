import React from 'react'

import Options from '../Options'
import MarketSetup from '../MarketSetup'

import './form.sass'

const Form = () => (
  <form
    id='form'
    name='form'
    className='form'
  >
    <Options />
    <MarketSetup />
  </form>
)

export default Form
