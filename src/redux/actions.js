/* eslint import/prefer-default-export: 0 */
import ActionType from 'src/redux/action-types.js'

export const setTrackStatus = ({ trackId, status }) => ({
  type: ActionType.SET_TRACK_STATUS,
  payload: { trackId, status },
})
