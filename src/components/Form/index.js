import React, { useState } from 'react'

import Markets from '../../data/marketTemplates.json'

import Sets from '../Sets'
import MarketSetup from '../MarketSetup'

import './form.sass'

const Form = () => {
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
  const [selected, setSelected] = useState(Markets[0].name)
  const [market, setMarket] = useState(Markets[0])

  return (
    <form
      id='form'
      name='form'
      className='form'
    >
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
        lgb={lgb}
        setLGB={setLGB}
        lgg={lgg}
        setLGG={setLGG}
        lgo={lgo}
        setLGO={setLGO}
        lgy={lgy}
        setLGY={setLGY}
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
        pmFV={pmFV}
        setPMFV={setPMFV}
        pmTS={pmTS}
        setPMTS={setPMTS}
        pmSM={pmSM}
        setPMSM={setPMSM}
        pmDF={pmDF}
        setPMDF={setPMDF}
        players={players}
        setPlayers={setPlayers}
      />
      <MarketSetup
        selected={selected}
        setSelected={setSelected}
        market={market}
        setMarket={setMarket}
        markets={Markets}
      />
    </form>
  )
}

export default Form
