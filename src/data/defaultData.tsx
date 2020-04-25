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
  availableNemCards: [null],
  numMages: null,
  mages: [null],
  nemesis: null,
  market: null,
  supply: [null],
  nemCards: [null]
}

export default defaultData