import React from 'react'

import './combatants.sass'

const Combatants = props => {
  const disableMin = val => {
    return val < props.minNem ? 'disabled' : false
  }

  const disableMax = val => {
    return val > props.maxNem ? 'disabled' : false
  }

  return (
    <div className='combatants'>
      <p>
        <label htmlFor='mages' className='mages'>
          <select
            id='mages'
            name='mages'
            selected={props.mages}
            defaultValue='4'
            onChange={e => props.setMages(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>{' '}
          number of mages
        </label>
      </p>
      <p>
        <label htmlFor='minNem' className='minNem'>
          <select
            id='minNem'
            name='minNem'
            selected={props.minNem}
            defaultValue='1'
            onChange={e => props.setMinNem(+e.target.value)}
          >
            <option value='1' disabled={disableMax(1)}>1</option>
            <option value='2' disabled={disableMax(2)}>2</option>
            <option value='3' disabled={disableMax(3)}>3</option>
            <option value='4' disabled={disableMax(4)}>4</option>
            <option value='5' disabled={disableMax(5)}>5</option>
            <option value='6' disabled={disableMax(6)}>6</option>
            <option value='7' disabled={disableMax(7)}>7</option>
            <option value='8' disabled={disableMax(8)}>8</option>
            <option value='9' disabled={disableMax(9)}>9</option>
            <option value='10' disabled={disableMax(10)}>10</option>
          </select>{' '}
          minimum nemesis difficulty
        </label>
      </p>
      <p>
        <label htmlFor='maxNem' className='maxNem'>
          <select
            id='maxNem'
            name='maxNem'
            selected={props.maxNem}
            defaultValue='10'
            onChange={e => props.setMaxNem(+e.target.value)}
          >
            <option value='1' disabled={disableMin(1)}>1</option>
            <option value='2' disabled={disableMin(2)}>2</option>
            <option value='3' disabled={disableMin(3)}>3</option>
            <option value='4' disabled={disableMin(4)}>4</option>
            <option value='5' disabled={disableMin(5)}>5</option>
            <option value='6' disabled={disableMin(6)}>6</option>
            <option value='7' disabled={disableMin(7)}>7</option>
            <option value='8' disabled={disableMin(8)}>8</option>
            <option value='9' disabled={disableMin(9)}>9</option>
            <option value='10' disabled={disableMin(10)}>10</option>
          </select>{' '}
          maximum nemesis difficulty
        </label>
      </p>
    </div>
  )
}

export default Combatants
