import React, { useState } from 'react'

import Data from '../../../data'

import Sets from './Sets'
import MarketSetup from './MarketSetup'
import Combatants from './Combatants'
import Submit from './Submit'

import styles from './form.module.sass'

const Form = props => {
  const [ae, setAE] = useState(true)
  const [td, setTD] = useState(false)
  const [tn, setTN] = useState(false)
  const [we, setWE] = useState(false)
  const [tv, setTV] = useState(false)
  const [od, setOD] = useState(false)
  const [lg, setLG] = useState(false)
  const [bs, setBS] = useState(false)
  const [na, setNA] = useState(false)
  const [sd, setSD] = useState(false)
  const [ta, setTA] = useState(false)
  const [iw, setIW] = useState(false)
  const [pmES, setPMES] = useState(false)
  const [pmFQ, setPMFQ] = useState(false)
  const [pmRL, setPMRL] = useState(false)
  const [pmAI, setPMAI] = useState(false)
  const [pmFV, setPMFV] = useState(false)
  const [pmTS, setPMTS] = useState(false)
  const [pmSM, setPMSM] = useState(false)
  const [pmDF, setPMDF] = useState(false)
  const [pmIF, setPMIF] = useState(false)
  const [pmCA, setPMCA] = useState(false)
  const [selected, setSelected] = useState(Markets[0].name)
  const [market, setMarket] = useState(Markets[0])
  const [mages, setMages] = useState(4)
  const [minNem, setMinNem] = useState(1)
  const [maxNem, setMaxNem] = useState(10)
  const Markets = Data.marketTemplates

  const randomize = () => props.setData({
    sets: { ae, td, tn, we, tv, od, lg, bs, na, sd, ta, iw, pmES, pmFQ, pmRL, pmAI, pmFV, pmTS, pmSM, pmDF, pmIF, pmCA },
    market,
    mages,
    nemesis: {
      minNem,
      maxNem
    }
  })

  return (
    <form
      id='form'
      name='form'
      className={styles.form}
    >
      <div className={styles.column}>
        <Sets
          ae={ae}
          setAE={setAE}
          td={td}
          setTD={setTD}
          tn={tn}
          setTN={setTN}
          we={we}
          setWE={setWE}
          tv={tv}
          setTV={setTV}
          od={od}
          setOD={setOD}
          lg={lg}
          setLG={setLG}
          bs={bs}
          setBS={setBS}
          na={na}
          setNA={setNA}
          sd={sd}
          setSD={setSD}
          ta={ta}
          setTA={setTA}
          iw={iw}
          setIW={setIW}
          pmES={pmES}
          setPMES={setPMES}
          pmFQ={pmFQ}
          setPMFQ={setPMFQ}
          pmRL={pmRL}
          setPMRL={setPMRL}
          pmAI={pmAI}
          setPMAI={setPMAI}
          pmFV={pmFV}
          setPMFV={setPMFV}
          pmTS={pmTS}
          setPMTS={setPMTS}
          pmSM={pmSM}
          setPMSM={setPMSM}
          pmDF={pmDF}
          setPMDF={setPMDF}
          pmIF={pmIF}
          setPMIF={setPMIF}
          pmCA={pmCA}
          setPMCA={setPMCA}
        />
      </div>
      <div className={styles.column}>
        <MarketSetup
          selected={selected}
          setSelected={setSelected}
          market={market}
          setMarket={setMarket}
          markets={Markets}
        />
      </div>
      <div className={styles.column}>
        <Combatants
          mages={mages}
          setMages={setMages}
          minNem={minNem}
          setMinNem={setMinNem}
          maxNem={maxNem}
          setMaxNem={setMaxNem}
        />
        <Submit
          randomize={randomize}
        />
      </div>
    </form>
  )
}

export default Form
