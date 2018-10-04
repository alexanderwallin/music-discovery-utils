import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { TrackStatus } from 'src/constants.js'
import { setTrackStatus } from 'src/redux/actions.js'

/**
 * Track Status Picker
 */
class TrackStatusPicker extends Component {
  static propTypes = {
    trackId: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.values(TrackStatus)),
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    status: null,
  }

  render() {
    const { trackId, status, onChange } = this.props

    return (
      <select
        defaultValue={status}
        onChange={evt => onChange(trackId, evt.target.value)}
      >
        <option value={null}>No status</option>
        <option value={TrackStatus.REJECTED}>Rejected</option>
        <option value={TrackStatus.IN_CART}>In cart</option>
        <option value={TrackStatus.BOUGHT}>Bought</option>
      </select>
    )
  }
}

export default connect(
  (state, { trackId }) => ({
    status: state.tracks[trackId] ? state.tracks[trackId].status : null,
  }),
  dispatch => ({
    onChange: (trackId, status) =>
      dispatch(setTrackStatus({ trackId, status })),
  })
)(TrackStatusPicker)
