import ts from '@wessberg/rollup-plugin-ts'
import { eslint } from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: '@mahjong-client/core'
  },
  watch: {
    clearScreen: false
  },
  plugins: [resolve({ browser: true }), commonjs(), eslint(), ts()]
}
