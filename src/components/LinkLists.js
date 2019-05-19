/* global window */
import { h, Component } from 'preact'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { autobind } from 'core-decorators'
import YouTube from 'react-youtube'
import styled from 'styled-components'

import { Platform, QueryType } from 'src/constants.js'
import { getQueryType } from 'src/utils.js'
import TrackStatusPicker from 'src/components/TrackStatusPicker.js'
import { setResults } from 'src/redux/actions.js'
import getYoutubeResult from 'src/services/youtube.js'
import { Button, H1 } from 'src/styles/elements.js'

const QuerySection = styled.section`
  margin-bottom: 32px;
`

const QueryInput = styled.textarea`
  appearance: none;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  background: whitesmoke;
  border: none;
  border-radius: 2px;
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
`

const TrackList = styled.table`
  width: 100%;
`

const Th = styled.th`
  padding: 8px 0;
  border-bottom: 1px solid whitesmoke;
  text-align: left;
`

const Td = styled.td`
  padding: 16px 16px 16px 0;
  border-bottom: 1px solid whitesmoke;
  vertical-align: top;
`

const EmptyColumn = styled(Td)`
  padding: 32px;
  border: none;
  color: slategray;
  text-align: center;
`

const TrackTitleCol = Td.extend`
  min-width: 240px;
`

const PurchaseLink = styled.a`
  display: block;
  margin-right: 8px;
  color: slategray;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: navy;
  }
`

const ResultRow = ({ result, onSaveTrack, onRejectTrack }) => (
  <tr>
    <TrackTitleCol>{result.query}</TrackTitleCol>
    <Td>
      {result.platform === Platform.YOUTUBE &&
        (result.id ? (
          <YouTube
            videoId={result.id}
            opts={{
              width: 400,
              height: 160,
            }}
          />
        ) : (
          <em>No result</em>
        ))}
    </Td>
    <Td>
      <PurchaseLink
        target="_blank"
        href={`https://bandcamp.com/search?q=${window.encodeURIComponent(
          result.query
        )}`}
      >
        Bandcamp
      </PurchaseLink>

      <PurchaseLink
        target="_blank"
        href={`https://www.junodownload.com/search/?${window.encodeURIComponent(
          'q[all][]'
        )}=${window.encodeURIComponent(result.query)}`}
      >
        Juno Download
      </PurchaseLink>

      <PurchaseLink
        target="_blank"
        href={`https://www.beatport.com/search?q=${window.encodeURIComponent(
          result.query
        )}`}
      >
        Beatport
      </PurchaseLink>
    </Td>

    <Td>
      <TrackStatusPicker trackId={result.id} />
    </Td>

    <Td>
      <Button onClick={() => onSaveTrack(result)}>Save track</Button>
      <Button onClick={() => onRejectTrack(result)}>Forget and move on</Button>
    </Td>
  </tr>
)

/**
 * Link List
 */
class LinkList extends Component {
  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    tracks: PropTypes.shape({}).isRequired,
    onFetchResults: PropTypes.func.isRequired,
  }

  state = {
    query: '',
    isLoading: false,
  }

  @autobind
  async handleQueryChange(query) {
    const { onFetchResults } = this.props

    this.setState({
      query,
      isLoading: true,
    })

    const queries = query.split('\n').filter(x => x)
    const results = await Promise.all(
      queries.map(x => {
        const type = getQueryType(x)

        if (type === QueryType.FREE_TEXT) {
          return getYoutubeResult(x)
        }

        return {
          query: x,
          playform: null,
          id: null,
        }
      })
    )

    this.setState({ isLoading: false })
    onFetchResults(results)
  }

  render() {
    const { results, tracks } = this.props
    const { query, isLoading } = this.state

    return (
      <div className="LinkList">
        <H1>Track pursuit</H1>

        <QuerySection>
          <QueryInput
            rows="3"
            placeholder="Paste titles (preferably with artist name) or YouTube URLs here"
            value={query}
            onChange={evt => this.setState({ query: evt.target.value })}
          />

          <Button
            disabled={query === ''}
            onClick={() => this.handleQueryChange(query)}
          >
            Look up tracks
          </Button>
        </QuerySection>

        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TrackList>
              <thead>
                <tr>
                  <Th>Track</Th>
                  <Th>YouTube</Th>
                  <Th>Purchase</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>

              <tbody>
                {results.length === 0 && (
                  <tr>
                    <EmptyColumn colSpan="4">
                      No results to show just now
                    </EmptyColumn>
                  </tr>
                )}

                {results.map(result => (
                  <ResultRow result={result} />
                ))}

                <tr>
                  <EmptyColumn colSpan="4">-----------------------</EmptyColumn>
                </tr>

                {Object.values(tracks).map(track => (
                  <ResultRow result={track} />
                ))}
              </tbody>
            </TrackList>
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    results: state.results,
    tracks: state.tracks,
  }),
  dispatch => ({
    onFetchResults: results => dispatch(setResults({ results })),
  })
)(LinkList)
