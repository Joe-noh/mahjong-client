import { Backend } from '@mahjong-client/core'

export default () => {
  return new Backend('http://localhost:4000', { authToken: null })
}
