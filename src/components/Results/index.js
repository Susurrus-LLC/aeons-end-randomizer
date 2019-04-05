import React, { useState, useEffect } from 'react'

import './results.sass'

const Results = props => {
  const [setsArr, setSetsArr] = useState([])
  const sets = props.data ? props.data.sets : null
  const market = props.data ? props.data.market : null
  const mages = props.data ? props.data.mages : null
  const nemesis = props.data ? props.data.nemesis : null

  useEffect(() => {
    if (props.data) {
      let newArr = []
      const setsKeys = Object.keys(sets)
      setsKeys.forEach(key => {
        if (sets[key]) {
          newArr.push(key)
        }
      })
      setSetsArr(newArr)
    }
  })

  return (
    <div className='results'>
      <p>{JSON.stringify(setsArr)}</p>
      <p>{JSON.stringify(market)}</p>
      <p>{JSON.stringify(mages)}</p>
      <p>{JSON.stringify(nemesis)}</p>
    </div>
  )
}

export default Results
