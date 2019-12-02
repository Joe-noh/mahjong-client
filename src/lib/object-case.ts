import { camelCase } from 'camel-case'
import { snakeCase } from 'snake-case'

export function camelize(obj: object): object {
  return walk(obj, camelCase)
}

export function decamelize(obj: object): object {
  return walk(obj, snakeCase)
}

function walkObject(obj: object, transformer: (val: any) => any) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    acc[transformer(key)] = walk(val, transformer)
    return acc
  }, {})
}

function walkArray(array: array, transformer: (val: any) => any): array {
  return array.map(val => walk(val, transformer))
}

function walk(val: any, transformer: (val: any) => any): any {
  if (Array.isArray(val)) {
    return walkArray(val, transformer)
  } else if (typeof val === 'object') {
    return walkObject(val, transformer)
  } else {
    return val
  }
}
