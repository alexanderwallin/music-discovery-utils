import produce from 'immer'

import ActionType from 'src/redux/action-types.js'

const initialState = {
  app: 'verydisco',
  results: [],
  tracks: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_RESULTS:
      return produce(state, draft => {
        draft.results = payload.results
      })
    case ActionType.SET_TRACK:
      return produce(state, draft => {
        draft.tracks[payload.track.id] = payload.track
      })
    case ActionType.SET_TRACK_STATUS:
      return produce(state, draft => {
        draft.tracks[payload.trackId].status = payload.status
      })
    default:
      return state
  }
}
