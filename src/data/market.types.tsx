export type CardType = {
  type: string,
  comp: '<' | '<=' | '=' | '>=' | '>' | '><' | 'any',
  cost?: number
}

export type Market = {
  name: string,
  card1: CardType,
  card2: CardType,
  card3: CardType,
  card4: CardType,
  card5: CardType,
  card6: CardType,
  card7: CardType,
  card8: CardType,
  card9: CardType
}
