import React, { useState } from 'react'

import './options.sass'

const Options = () => {
  const [ae, setAE] = useState(true)
  const [td, setTD] = useState(false)
  const [tn, setTN] = useState(false)
  const [we, setWE] = useState(false)
  const [tv, setTV] = useState(false)
  const [od, setOD] = useState(false)
  const [lg, setLG] = useState(false)
  const [lgb, setLGB] = useState(false)
  const [lgg, setLGG] = useState(false)
  const [lgo, setLGO] = useState(false)
  const [lgy, setLGY] = useState(false)
  const [bs, setBS] = useState(false)
  const [na, setNA] = useState(false)
  const [sd, setSD] = useState(false)
  const [ta, setTA] = useState(false)
  const [iw, setIW] = useState(false)
  const [pmES, setPMES] = useState(false)
  const [pmFV, setPMFV] = useState(false)
  const [pmTS, setPMTS] = useState(false)
  const [pmSM, setPMSM] = useState(false)
  const [pmDF, setPMDF] = useState(false)
  const [players, setPlayers] = useState(4)

  const playersNum = (val) => {
    if (val < 1) {
      setPlayers(1)
    } else if (val > 4) {
      setPlayers(4)
    } else {
      setPlayers(Math.round(val))
    }
  }

  return (
    <div className='options'>
      <ul className='options-list'>
        <li className='base'>
          <label htmlFor='AE'>
            <input
              type='checkbox'
              id='AE'
              name='AE'
              value='AE'
              checked={ae}
              onChange={() => setAE(!ae)}
            />{' '}
            Aeon&rsquo;s End
          </label>
        </li>
        <li className='expansion'>
          <label htmlFor='TD'>
            <input
              type='checkbox'
              id='TD'
              name='TD'
              value='TD'
              checked={td}
              onChange={() => setTD(!td)}
            />{' '}
            The Depths
          </label>
        </li>
        <li className='expansion'>
          <label htmlFor='TN'>
            <input
              type='checkbox'
              id='TN'
              name='TN'
              value='TN'
              checked={tn}
              onChange={() => setTN(!tn)}
            />{' '}
            The Nameless
          </label>
        </li>
        <li className='base'>
          <label htmlFor='WE'>
            <input
              type='checkbox'
              id='WE'
              name='WE'
              value='WE'
              checked={we}
              onChange={() => setWE(!we)}
            />{' '}
            War Eternal
          </label>
        </li>
        <li className='expansion'>
          <label htmlFor='TV'>
            <input
              type='checkbox'
              id='TV'
              name='TV'
              value='TV'
              checked={tv}
              onChange={() => setTV(!tv)}
            />{' '}
            The Void
          </label>
        </li>
        <li className='expansion'>
          <label htmlFor='OD'>
            <input
              type='checkbox'
              id='OD'
              name='OD'
              value='OD'
              checked={od}
              onChange={() => setOD(!od)}
            />{' '}
            The Outer Dark
          </label>
        </li>
        <li className='base'>
          <label htmlFor='LG'>
            <input
              type='checkbox'
              id='LG'
              name='LG'
              value='LG'
              checked={lg}
              onChange={() => setLG(!lg)}
            />{' '}
            Legacy
          </label>
        </li>
        <li>
          <ul className='next-level'>
            <li>Mages</li>
            <li>
              <ul className='next-level'>
                <li>
                  <label htmlFor='LGB'>
                    <input
                      type='checkbox'
                      id='LGB'
                      name='LGB'
                      value='LGB'
                      checked={lgb}
                      onChange={() => setLGB(!lgb)}
                    />{' '}
                    Blue Mage
                  </label>
                </li>
                <li>
                  <label htmlFor='LGG' className='legacy-mages'>
                    <input
                      type='checkbox'
                      id='LGG'
                      name='LGG'
                      value='LGG'
                      checked={lgg}
                      onChange={() => setLGG(!lgg)}
                    />{' '}
                    Green Mage
                  </label>
                </li>
                <li>
                  <label htmlFor='LGO' className='legacy-mages'>
                    <input
                      type='checkbox'
                      id='LGO'
                      name='LGO'
                      value='LGO'
                      checked={lgo}
                      onChange={() => setLGO(!lgo)}
                    />{' '}
                    Orange Mage
                  </label>
                </li>
                <li>
                  <label htmlFor='LGY' className='legacy-mages'>
                    <input
                      type='checkbox'
                      id='LGY'
                      name='LGY'
                      value='LGY'
                      checked={lgy}
                      onChange={() => setLGY(!lgy)}
                    />{' '}
                    Yellow Mage
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='expansion'>
          <label htmlFor='BS'>
            <input
              type='checkbox'
              id='BS'
              name='BS'
              value='BS'
              checked={bs}
              onChange={() => setBS(!bs)}
            />{' '}
            Buried Secrets
          </label>
        </li>
        <li className='base'>
          <label htmlFor='NA'>
            <input
              type='checkbox'
              id='NA'
              name='NA'
              value='NA'
              checked={na}
              onChange={() => setNA(!na)}
            />{' '}
            The New Age
          </label>
        </li>
        <li className='expansion'>
          <label htmlFor='SD'>
            <input
              type='checkbox'
              id='SD'
              name='SD'
              value='SD'
              checked={sd}
              onChange={() => setSD(!sd)}
            />{' '}
            Shattered Dreams
          </label>
        </li>
        <li className='expansion'>
          <label htmlFor='TA'>
            <input
              type='checkbox'
              id='TA'
              name='TA'
              value='TA'
              checked={ta}
              onChange={() => setTA(!ta)}
            />{' '}
            The Ancients
          </label>
        </li>
        <li className='expansion'>
          <label htmlFor='IW'>
            <input
              type='checkbox'
              id='IW'
              name='IW'
              value='IW'
              checked={iw}
              onChange={() => setIW(!iw)}
            />{' '}
            Into the Wild
          </label>
        </li>
        <li className='base'>Promos</li>
        <li>
          <ul className='next-level'>
            <li>
              <label htmlFor='PMES'>
                <input
                  type='checkbox'
                  id='PMES'
                  name='PMES'
                  value='PMES'
                  checked={pmES}
                  onChange={() => setPMES(!pmES)}
                />{' '}
                Echo Stone
              </label>
            </li>
            <li>
              <label htmlFor='PMFV'>
                <input
                  type='checkbox'
                  id='PMFV'
                  name='PMFV'
                  value='PMFV'
                  checked={pmFV}
                  onChange={() => setPMFV(!pmFV)}
                />{' '}
                Fleeting Vision
              </label>
            </li>
            <li>
              <label htmlFor='PMTS'>
                <input
                  type='checkbox'
                  id='PMTS'
                  name='PMTS'
                  value='PMTS'
                  checked={pmTS}
                  onChange={() => setPMTS(!pmTS)}
                />{' '}
                Thieving Spirit
              </label>
            </li>
            <li>
              <label htmlFor='PMSM'>
                <input
                  type='checkbox'
                  id='PMSM'
                  name='PMSM'
                  value='PMSM'
                  checked={pmSM}
                  onChange={() => setPMSM(!pmSM)}
                />{' '}
                Splinter Missile
              </label>
            </li>
            <li>
              <label htmlFor='PMDF'>
                <input
                  type='checkbox'
                  id='PMDF'
                  name='PMDF'
                  value='PMDF'
                  checked={pmDF}
                  onChange={() => setPMDF(!pmDF)}
                />{' '}
                Drown in Flames
              </label>
            </li>
          </ul>
        </li>
        <li>
          <label htmlFor='players' className='players'>
            <input
              type='number'
              id='players'
              name='players'
              min='1'
              max='4'
              value={players}
              onChange={e => playersNum(e.target.value)}
            />{' '}
            number of players
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Options
