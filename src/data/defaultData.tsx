import { Data } from '.'
import cards from './cards'
import mages from './mages'
import markets from './markets'
import nemeses from './nemeses'

const defaultData: Data = {
  availableMages: mages,
  availableNemeses: nemeses,
  availableMarkets: markets,
  availableCards: cards,
  availableNemCards: [{ name: 'Test', type: 'attack', set: 'AE' }],
  numMages: 4,
  mages: [null],
  nemesis: null,
  market: null,
  supply: [null],
  nemCards: [null]
}

export default defaultData
