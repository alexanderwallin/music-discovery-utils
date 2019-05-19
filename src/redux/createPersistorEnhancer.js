import persistState from 'redux-localstorage'

const STORAGE_KEY = 'verydisco_1'

export default function createPersistorEnhancer() {
  return persistState(['results', 'tracks'], { key: STORAGE_KEY })
}
