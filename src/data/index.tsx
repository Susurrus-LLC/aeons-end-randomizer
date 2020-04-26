import CARDS from './cards'
import MAGES from './mages'
import MARKETS from './markets'
import NEMESES from './nemeses'
import SETS from './sets'
import DEFAULTDATA from './defaultData'

export type Card = {
  name: string
  type: 'gem' | 'relic' | 'spell'
  set: string
  cost: number
}

export type CardSet = Card[]

export type Mage = {
  mage: string
  set: string
}

export type MageSet = Mage[]

export type MageNum = 1 | 2 | 3 | 4

export type CardTemplate = {
  type: string
  comp: '<' | '<=' | '=' | '>=' | '>' | '><' | 'any'
  cost?: number
  costHigh?: number
}

export type Market = {
  name: string
  card1: CardTemplate
  card2: CardTemplate
  card3: CardTemplate
  card4: CardTemplate
  card5: CardTemplate
  card6: CardTemplate
  card7: CardTemplate
  card8: CardTemplate
  card9: CardTemplate
}

export type MarketSet = Market[]

export type Nemesis = {
  nemesis: string
  difficulty: number
  set: string
}

export type Nemeses = Nemesis[]

export type NemCard = {
  name: string
  type: 'attack' | 'power' | 'minion'
  set: string
}

export type NemCardSet = NemCard[]

export type Set = {
  set: string
  code: string
  wave: string
}

export type Sets = Set[]

export type Data = {
  availableMages: MageSet
  availableNemeses: Nemeses
  availableMarkets: MarketSet
  availableCards: CardSet
  availableNemCards: NemCardSet
  numMages: MageNum
  mages: MageSet | [null]
  nemesis: Nemesis | null
  market: Market | null
  supply: CardSet | [null]
  nemCards: NemCardSet | [null]
}

export type Selection = 'none' | 'partial' | 'all'

export default { CARDS, MAGES, MARKETS, NEMESES, SETS, DEFAULTDATA }
