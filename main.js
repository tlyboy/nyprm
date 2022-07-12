import * as data from './data.js'
import * as methods from './methods.js'

export * from './data.js'
export * from './methods.js'

export default {
  ...data,
  ...methods
}
