import flow from 'lodash.flow'
import { render } from 'mustache'

const helpers = {
  upper: () => (text, render) => {
    if (!text || typeof text !== 'string') {
      return ''
    }
    return render(text).toUpperCase()
  },
}

// perf note: "stringify/compile/parse" performs better than "recursive compile"
//  the last one performs worse as object gets larger or deeper
export const expandJson = (json, payload) => (
  flow([
    JSON.stringify,
    (_) => render(_, Object.assign({}, payload, helpers)),
    JSON.parse,
  ])(json)
)
