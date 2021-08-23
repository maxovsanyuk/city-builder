import map from 'lodash/map'
import uniq from 'lodash/uniq'
import flattenDeep from 'lodash/flattenDeep'

// Return all unique 'prop' values from the array of objects
export const getUniqueValuesFromObjectArray = <T = any>(objectArray: { [x: string]: any }[], prop: string): T[] =>
  uniq(flattenDeep(map(objectArray, prop))).filter(Boolean)
