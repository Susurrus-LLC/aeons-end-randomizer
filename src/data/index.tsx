import cards from './cards'
import mages from './mages'
import marketTemplates from './marketTemplates'
import nemeses from './nemeses'
import sets from './sets'

export type Card = {
  name: string,
  type: "gem" | "relic" | "spell",
  set: string,
  cost: number
}

export type CardSet = Card[]

export type Mage = {
  mage: string,
  set: string
}

export type MageSet = Mage[]

export type CardTemplate = {
  type: string,
  comp: '<' | '<=' | '=' | '>=' | '>' | '><' | 'any',
  cost?: number,
  costHigh?: number
}

export type Market = {
  name: string,
  card1: CardTemplate,
  card2: CardTemplate,
  card3: CardTemplate,
  card4: CardTemplate,
  card5: CardTemplate,
  card6: CardTemplate,
  card7: CardTemplate,
  card8: CardTemplate,
  card9: CardTemplate
}

export type MarketSet = Market[]

export type Nemesis = {
  nemesis: string,
  difficulty: number,
  set: string
}

export type Nemeses = Nemesis[]

export type Set = {
  set: string,
  code: string,
  wave: string
}

export type Sets = Set[]

export default { cards, mages, marketTemplates, nemeses, sets }
