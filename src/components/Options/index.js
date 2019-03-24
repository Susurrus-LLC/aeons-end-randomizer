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

  return (
    <div className='options'>
      <label htmlFor='AE' className='base'>
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
      <label htmlFor='TD' className='expansion'>
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
      <label htmlFor='TN' className='expansion'>
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
      <label htmlFor='WE' className='base'>
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
      <label htmlFor='TV' className='expansion'>
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
      <label htmlFor='OD' className='expansion'>
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
      <label htmlFor='LG' className='base'>
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
      <label className='expansion'>Mages</label>
      <label htmlFor='LGB' className='legacy-mages'>
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
      <label htmlFor='BS' className='expansion'>
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
      <label htmlFor='NA' className='base'>
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
      <label htmlFor='SD' className='expansion'>
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
      <label htmlFor='TA' className='expansion'>
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
      <label htmlFor='IW' className='expansion'>
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
      <label className='base'>
        Promos
      </label>
      <label htmlFor='PMES' className='expansion'>
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
      <label htmlFor='PMFV' className='expansion'>
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
      <label htmlFor='PMTS' className='expansion'>
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
      <label htmlFor='PMSM' className='expansion'>
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
      <label htmlFor='PMDF' className='expansion'>
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
    </div>
  )
}

export default Options
