import ts from '@wessberg/rollup-plugin-ts'
import { eslint } from 'rollup-plugin-eslint'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: '@mahjong-client/core'
  },
  plugins: [eslint(), ts()]
}
