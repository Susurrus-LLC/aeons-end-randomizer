export type Card = {
  name: string,
  type: "gem" | "relic" | "spell",
  set: string,
  cost: number
}

export type CardSet = Card[]
