import React, { useState, useEffect } from 'react'

import cards from '../../data/cards.json'
import allMages from '../../data/mages.json'
import nemeses from '../../data/nemeses.json'

import './results.sass'

const Results = props => {
  const [setsArr, setSetsArr] = useState([])
  const [availGems, setAvailGems] = useState([])
  const [availRelics, setAvailRelics] = useState([])
  const [availSpells, setAvailSpells] = useState([])
  const [availMages, setAvailMages] = useState([])
  const [selectedMages, setSelectedMages] = useState([])
  const [availNems, setAvailNems] = useState([])
  const [selectedNems, setSelectedNems] = useState([])

  const randUnique = (list, num) => {
    let newList = list
    let selArr = []
    while (num > 0 && newList.length > 0) {
      const rand = Math.floor(Math.random() * list.length)
      selArr.push(list[rand])
      newList.splice(rand, 1)
      num--
    }
    return selArr
  }

  useEffect(() => {
    if (props.data) {
      let newArr = []
      const setsKeys = Object.keys(props.data.sets)
      setsKeys.forEach(key => {
        if (props.data.sets[key]) {
          newArr.push(key.toUpperCase())
        }
      })
      setSetsArr(newArr)
    }
  }, [props.data])

  useEffect(() => {
    if (setsArr.length > 0) {
      let newGemArr = []
      cards.forEach(card => {
        if (card.type === 'gem' && setsArr.indexOf(card.set) > -1) {
          newGemArr.push(card)
        }
      })
      setAvailGems(newGemArr)

      let newRelicArr = []
      cards.forEach(card => {
        if (card.type === 'relic' && setsArr.indexOf(card.set) > -1) {
          newRelicArr.push(card)
        }
      })
      setAvailRelics(newRelicArr)

      let newSpellArr = []
      cards.forEach(card => {
        if (card.type === 'spell' && setsArr.indexOf(card.set) > -1) {
          newSpellArr.push(card)
        }
      })
      setAvailSpells(newSpellArr)

      let newMagesArr = []
      allMages.forEach(mage => {
        if (setsArr.indexOf(mage.set) > -1) {
          newMagesArr.push(mage)
        }
      })
      setAvailMages(newMagesArr)

      let newNemsArr = []
      nemeses.forEach(nem => {
        if (setsArr.indexOf(nem.set) > -1 && nem.difficulty >= props.data.nemesis.minNem && nem.difficulty <= props.data.nemesis.maxNem) {
          newNemsArr.push(nem)
        }
      })
      setAvailNems(newNemsArr)
    }
  }, [setsArr])

  useEffect(() => {
    if (availMages.length > 0) {
      setSelectedMages(randUnique(availMages, props.data.mages))
    }
  }, [availMages])

  const magesList = () => {
    if (selectedMages.length > 0) {
      return (
        <React.Fragment>
          <h2>Mages</h2>
          <ul className='mages-list'>
            {selectedMages.map((item, i) => (
              <li className='mage' key={i}>{item.mage}</li>
            ))}
          </ul>
        </React.Fragment>
      )
    }
  }

  useEffect(() => {
    if (availNems.length > 0) {
      setSelectedNems(randUnique(availNems, 1))
    }
  }, [availNems])

  const nemText = () => {
    if (props.data) {
      if (availNems.length > 0) {
        if (selectedNems.length > 0) {
          return (
            <React.Fragment>
              <h2>Nemesis</h2>
              <p className='nemesis'>
                {`${selectedNems[0].nemesis} (difficulty ${selectedNems[0].difficulty})`}
              </p>
            </React.Fragment>
          )
        }
      } else {
        return (
          <React.Fragment>
            <h2>Nemesis</h2>
            <p className='nemesis'>
              No nemeses match the selected difficulty range.
            </p>
          </React.Fragment>
        )
      }
    }
  }

  return (
    <div className='results'>
      {magesList()}
      {nemText()}
      <p>{JSON.stringify(setsArr)}</p>
      <p>{JSON.stringify(availGems)}</p>
      <p>{JSON.stringify(availRelics)}</p>
      <p>{JSON.stringify(availSpells)}</p>
      <p>{props.data ? JSON.stringify(props.data.market) : null}</p>
    </div>
  )
}

export default Results
