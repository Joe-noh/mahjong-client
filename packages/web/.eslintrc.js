module.exports = {
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ]
}
