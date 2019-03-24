import React, { useState } from 'react'

import './options.sass'

const Options = () => {
  const [ae, setAE] = useState(true)

  return (
    <div className='options'>
      <label htmlFor='AE'>
        <input
          type='checkbox'
          name='AE'
          value='AE'
          checked={ae}
          onClick={setAE(!ae)}
        />
        Aeon&rsquo;s End
      </label>
    </div>
  )
}

export default Options
