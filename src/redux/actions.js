import ActionType from 'src/redux/action-types.js'

export const setResults = ({ results }) => ({
  type: ActionType.SET_RESULTS,
  payload: { results },
})

export const setTracks = ({ tracks }) => ({
  type: ActionType.SET_TRACKS,
  payload: { tracks },
})

export const setTrackStatus = ({ trackId, status }) => ({
  type: ActionType.SET_TRACK_STATUS,
  payload: { trackId, status },
})
