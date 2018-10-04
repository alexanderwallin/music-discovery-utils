import ActionType from 'src/redux/action-types.js'

const initialState = {
  app: 'verydisco',
  tracks: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_TRACK_STATUS:
      return {
        ...state,
        tracks: {
          ...state.tracks,
          [payload.trackId]: {
            status: payload.status,
          },
        },
      }
    default:
      return state
  }
}
