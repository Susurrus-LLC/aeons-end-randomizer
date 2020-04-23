import React from 'react'

import './sets.sass'

const Sets = props => (
  <div className='sets'>
    <ul className='sets-list'>
      <li className='base'>
        <label htmlFor='AE'>
          <input
            type='checkbox'
            id='AE'
            name='AE'
            value='AE'
            checked={props.ae}
            onChange={() => props.setAE(!props.ae)}
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
            checked={props.td}
            onChange={() => props.setTD(!props.td)}
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
            checked={props.tn}
            onChange={() => props.setTN(!props.tn)}
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
            checked={props.we}
            onChange={() => props.setWE(!props.we)}
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
            checked={props.tv}
            onChange={() => props.setTV(!props.tv)}
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
            checked={props.od}
            onChange={() => props.setOD(!props.od)}
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
            checked={props.lg}
            onChange={() => props.setLG(!props.lg)}
          />{' '}
          Legacy
        </label>
      </li>
      <li className='expansion'>
        <label htmlFor='BS'>
          <input
            type='checkbox'
            id='BS'
            name='BS'
            value='BS'
            checked={props.bs}
            onChange={() => props.setBS(!props.bs)}
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
            checked={props.na}
            onChange={() => props.setNA(!props.na)}
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
            checked={props.sd}
            onChange={() => props.setSD(!props.sd)}
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
            checked={props.ta}
            onChange={() => props.setTA(!props.ta)}
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
            checked={props.iw}
            onChange={() => props.setIW(!props.iw)}
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
                checked={props.pmES}
                onChange={() => props.setPMES(!props.pmES)}
              />{' '}
              Echo Stone
            </label>
          </li>
          <li>
            <label htmlFor='PMFQ'>
              <input
                type='checkbox'
                id='PMFQ'
                name='PMFQ'
                value='PMFQ'
                checked={props.pmFQ}
                onChange={() => props.setPMFQ(!props.pmFQ)}
              />{' '}
              Fractured Quartz
            </label>
          </li>
          <li>
            <label htmlFor='PMRL'>
              <input
                type='checkbox'
                id='PMRL'
                name='PMRL'
                value='PMRL'
                checked={props.pmRL}
                onChange={() => props.setPMRL(!props.pmRL)}
              />{' '}
              Rock Launcher
            </label>
          </li>
          <li>
            <label htmlFor='PMAI'>
              <input
                type='checkbox'
                id='PMAI'
                name='PMAI'
                value='PMAI'
                checked={props.pmAI}
                onChange={() => props.setPMAI(!props.pmAI)}
              />{' '}
              Abacus of Ignition
            </label>
          </li>
          <li>
            <label htmlFor='PMFV'>
              <input
                type='checkbox'
                id='PMFV'
                name='PMFV'
                value='PMFV'
                checked={props.pmFV}
                onChange={() => props.setPMFV(!props.pmFV)}
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
                checked={props.pmTS}
                onChange={() => props.setPMTS(!props.pmTS)}
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
                checked={props.pmSM}
                onChange={() => props.setPMSM(!props.pmSM)}
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
                checked={props.pmDF}
                onChange={() => props.setPMDF(!props.pmDF)}
              />{' '}
              Drown in Flames
            </label>
          </li>
          <li>
            <label htmlFor='PMIF'>
              <input
                type='checkbox'
                id='PMIF'
                name='PMIF'
                value='PMIF'
                checked={props.pmIF}
                onChange={() => props.setPMIF(!props.pmIF)}
              />{' '}
              Illuminating Flame
            </label>
          </li>
          <li>
            <label htmlFor='PMCA'>
              <input
                type='checkbox'
                id='PMCA'
                name='PMCA'
                value='PMCA'
                checked={props.pmCA}
                onChange={() => props.setPMCA(!props.pmCA)}
              />{' '}
              Chronal Arc
            </label>
          </li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Sets
