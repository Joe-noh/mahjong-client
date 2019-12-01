type Session = {
  token: string
}

type Participation = {
  gameId: string
}

type Rule = {
  numPlayers: number
  initialPoint: number
}

type Call = {
  type: 'chi' | 'pon' | 'ankan' | 'minkan' | 'kakan'
  from: 'kamicha' | 'toimen' | 'shimocha' | null
  tiles: number[]
}

type Discard = {
  hai: number
  tsumogiri: boolean
  reach: boolean
}

type Player = {
  point: number
  tehai: number[]
  tsumohai: number | nil
  furo: Call[]
  sutehai: Discard[]
  seki: 'ton' | 'nan' | 'sha' | 'pe'
}

type Game = {
  rule: Rule
  honba: number
  round: number
  tsumoban: string | nil
  players: { [key: string]: Player }
  yamahai: number[]
  rinshanhai: number[]
  wanpai: number[]
}
