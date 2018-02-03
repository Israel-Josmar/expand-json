import { expandJson } from './expand-json'

test('should expand all templates on an object literal', () => {
  const json = {
    value: '{{ some.value.here }}',
    A1: {
      value: '{{ other.value.here }}',
      B1: {
        value: '{{ another.value.here  }}',
        C1: {
          value: '{{ here.as.well }}',
          D1: '{{ its.amazing }}',
          D2: '{{ its.amazing }}',
        },
      },
      B2: {
        value: '{{ another.value.here  }}',
      },
    },
  }

  const payload = {
    some: { value: { here: 11 } },
    other: { value: { here: 13 } },
    another: { value: { here: 17 } },
    here: { as: { well: 19 } },
    its: { amazing: 23 },
  }

  const expected = {
    value: '11',
    A1: {
      value: '13',
      B1: {
        value: '17',
        C1: {
          value: '19',
          D1: '23',
          D2: '23',
        },
      },
      B2: {
        value: '17',
      },
    },
  }

  const result = expandJson(json, payload)

  expect(result).toEqual(expected)
})
