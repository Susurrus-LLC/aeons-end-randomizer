import React from 'react'

const Submit = props => {
  const handleClick = e => {
    e.preventDefault()
    props.randomize()
  }

  return (
    <div className='submit'>
      <button
        className='submit-button'
        type='submit'
        value='submit'
        onClick={e => handleClick(e)}
      >
        Randomize
      </button>
    </div>
  )
}

export default Submit
