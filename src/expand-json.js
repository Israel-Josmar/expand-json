import flow from 'lodash.flow'
import { render } from 'mustache'

// perf note: "stringify/compile/parse" performs better than "recursive compile"
//  the last one performs worse as object gets larger or deeper
export const expandJson = (json, payload) => (
  flow([
    JSON.stringify,
    (_) => render(_, payload),
    JSON.parse,
  ])(json)
)