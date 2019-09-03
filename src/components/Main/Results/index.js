import React, { useState, useEffect } from 'react'

import cards from '../../../data/cards.json'
import allMages from '../../../data/mages.json'
import nemeses from '../../../data/nemeses.json'

import './results.sass'

const Results = props => {
  const [noBase, setNoBase] = useState(false)
  const [setsArr, setSetsArr] = useState([])
  const [availGems, setAvailGems] = useState([])
  const [selectedGems, setSelectedGems] = useState([])
  const [availRelics, setAvailRelics] = useState([])
  const [selectedRelics, setSelectedRelics] = useState([])
  const [availSpells, setAvailSpells] = useState([])
  const [selectedSpells, setSelectedSpells] = useState([])
  const [availMages, setAvailMages] = useState([])
  const [selectedMages, setSelectedMages] = useState([])
  const [availNems, setAvailNems] = useState([])
  const [selectedNems, setSelectedNems] = useState([])

  // Randomly select from a list without duplicates
  const randUnique = (list, criteria, exclude) => {
    const isValid = (item, cri) => {
      switch (cri.comp) {
        case 'any':
          return true
        case '=':
          if (item.cost === cri.cost) {
            return true
          }
          break
        case '<':
          if (item.cost < cri.cost) {
            return true
          }
          break
        case '>':
          if (item.cost > cri.cost) {
            return true
          }
          break
        case '<=':
          if (item.cost <= cri.cost) {
            return true
          }
          break
        case '>=':
          if (item.cost >= cri.cost) {
            return true
          }
          break
        case '><':
          if (item.cost >= cri.cost && item.cost <= cri.costHigh) {
            return true
          }
          break
        default:
          return false
      }
    }

    let newList = []
    let selArr = []

    if (criteria.length > 0) {
      list.forEach(item => {
        let valid = false
        let i = 0

        while (!valid && i < criteria.length) {
          valid = isValid(item, criteria[i])
          i++
        }

        if (valid) {
          newList.push(item)
        }
      })
    }

    if (exclude && exclude.length > 0) {
      for (let i = 0; i < newList.length; i++) {
        if (exclude.indexOf(newList[i]) > -1) {
          newList.splice(i, 1)
        }
      }
    }

    const selectRand = length => Math.floor(Math.random() * length)

    criteria.forEach(item => {
      if (newList.length > 0) {
        let valid = false
        let rand = selectRand(newList.length)

        while (!valid) {
          rand = selectRand(newList.length)
          valid = isValid(newList[rand], item)
        }

        if (valid) {
          selArr.push(newList[rand])
          newList.splice(rand, 1)
        }
      }
    })

    return selArr
  }

  // Create an array of game sets any time data changes
  useEffect(() => {
    if (props.data) {
      let newArr = []
      const setsKeys = Object.keys(props.data.sets)
      setsKeys.forEach(key => {
        if (props.data.sets[key]) {
          newArr.push(key.toUpperCase())
        }
      })

      if (newArr.indexOf('AE') > -1 || newArr.indexOf('WE') > -1 || newArr.indexOf('LG') > -1 || newArr.indexOf('NA') > -1) {
        setNoBase(false)
        setSetsArr(newArr)
      } else {
        setNoBase(true)
        setSelectedGems([])
        setSelectedRelics([])
        setSelectedSpells([])
        setSelectedMages([])
        setSelectedNems([])
      }
    }
  }, [props.data])

  const noBases = () => {
    if (noBase) {
      return (
        <React.Fragment>
          <p className='error'>
            You must select at least one base game.
          </p>
        </React.Fragment>
      )
    }
  }

  // Create arrays of available cards, mages, and nemeses any time the selected sets are changed
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
    // eslint-disable-next-line
  }, [setsArr])

  // Select mages any time the list of available mages changes or the Randomize button is pushed
  useEffect(() => {
    if (availMages.length > 0) {
      const numMages = props.data.mages
      let criteria = []

      for (let i = 0; i < numMages; i++) {
        criteria.push({ comp: 'any' })
      }

      setSelectedMages(randUnique(availMages, criteria))
    }
    // eslint-disable-next-line
  }, [availMages])

  const magesList = () => {
    if (selectedMages.length > 0) {
      return (
        <div className='column'>
          <h2>Mages</h2>
          <ul className='mages-list'>
            {selectedMages.map((item, i) => (
              <li className='mage' key={i}>{item.mage}</li>
            ))}
          </ul>
        </div>
      )
    }
  }

  const listCriteria = (type) => {
    let list = []
    for (let i = 1; i <= 9; i++) {
      if (props.data.market[`card${i}`].type === type) {
        list.push(props.data.market[`card${i}`])
      }
    }
    return list
  }

  useEffect(() => {
    if (availGems.length > 0) {
      const criteria = listCriteria('gem')
      setSelectedGems(randUnique(availGems, criteria))
    }
    // eslint-disable-next-line
  }, [availGems])

  useEffect(() => {
    if (availRelics.length > 0) {
      const criteria = listCriteria('relic')
      setSelectedRelics(randUnique(availRelics, criteria))
    }
    // eslint-disable-next-line
  }, [availRelics])

  useEffect(() => {
    if (availSpells.length > 0) {
      const criteria = listCriteria('spell')
      setSelectedSpells(randUnique(availSpells, criteria))
    }
    // eslint-disable-next-line
  }, [availSpells])

  const marketList = () => {
    if (selectedGems.length > 0 || selectedRelics.length > 0 || selectedSpells.length > 0) {
      const marketArr = [].concat(selectedGems, selectedRelics, selectedSpells)
      return (
        <div className='column'>
          <h2>Market</h2>
          <ul className='market-list'>
            {marketArr.map((item, i) => (
              <li className='market-item' key={i}>{item.name} ({item.type}) (<span className='cost'>{item.cost}æ</span>)</li>
            ))}
          </ul>
        </div>
      )
    }
  }

  useEffect(() => {
    if (availNems.length > 0) {
      setSelectedNems(randUnique(availNems, [{ comp: 'any' }]))
    }
  }, [availNems])

  const nemText = () => {
    if (props.data) {
      if (availNems.length > 0) {
        if (selectedNems.length > 0) {
          return (
            <div className='column'>
              <h2>Nemesis</h2>
              <p className='nemesis'>
                {`${selectedNems[0].nemesis} (difficulty ${selectedNems[0].difficulty})`}
              </p>
            </div>
          )
        }
      } else {
        return (
          <div className='column'>
            <h2>Nemesis</h2>
            <p className='nemesis'>
              No nemeses match the selected difficulty range.
            </p>
          </div>
        )
      }
    }
  }

  return (
    <div className='results'>
      {noBases()}
      {magesList()}
      {marketList()}
      {nemText()}
    </div>
  )
}

export default Results
