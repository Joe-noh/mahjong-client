import { camelize, decamelize } from './object-case'

const camelObject = {
  user: {
    firstName: 'John',
    profile: {
      bornIn: 'USA'
    },
    skills: [
      { name: 'Programming', yearsOfExperience: 4 },
      { name: 'Project Management', yearsOfExperience: 2 }
    ]
  }
}

const snakeObject = {
  user: {
    first_name: 'John',
    profile: {
      born_in: 'USA'
    },
    skills: [
      { name: 'Programming', years_of_experience: 4 },
      { name: 'Project Management', years_of_experience: 2 }
    ]
  }
}

describe('camelize', () => {
  it('transforms object keys to camel case', () => {
    expect(camelize(snakeObject)).toEqual(camelObject)
  })
})

describe('decamelize', () => {
  it('transforms object keys to snake case', () => {
    expect(decamelize(camelObject)).toEqual(snakeObject)
  })
})
