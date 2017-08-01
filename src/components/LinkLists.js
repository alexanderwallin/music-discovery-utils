import { h, Component } from 'preact'
import { autobind } from 'core-decorators'
import YouTube from 'react-youtube'

import { Platform, QueryType } from 'src/constants.js'
import { getYoutubeResult } from 'src/services/youtube.js'
import { getQueryType } from 'src/utils/query-types.js'

/**
 * Link List
 */
class LinkList extends Component {
  state = {
    query: '',
    isLoading: false,
    results: [],
  }

  @autobind
  handleQueryChange(evt) {
    const query = evt.target.value

    this.setState(
      () => ({
        query,
        isLoading: true,
      }),
      () => {
        const queries = query.split('\n')
        Promise.all(
          queries.map(x => {
            const type = getQueryType(x)

            if (type === QueryType.FREE_TEXT) {
              return getYoutubeResult(x)
            }

            return null
          })
        ).then(results => {
          this.setState(() => ({
            isLoading: false,
            results,
          }))
        })
      }
    )
  }

  render(props, { query, isLoading, results }) {
    return (
      <div className="LinkList">
        <h1>Link List Creator</h1>

        <div style={{ display: 'flex' }}>
          <div style={{ paddingRight: 40 }}>
            <h2>Query</h2>
            <textarea
              cols="80"
              rows="10"
              placeholder="Paste titles or URLs here"
              value={query}
              onChange={this.handleQueryChange}
            />
          </div>

          <div>
            <h2>Results</h2>

            {isLoading
              ? <p>Loading...</p>
              : <ul>
                  {results.map(result => {
                    return (
                      <li key={result}>
                        <h3>
                          {result.query}
                        </h3>
                        {result.platform === Platform.YOUTUBE
                          ? result.id
                            ? <YouTube videoId={result.id} />
                            : <em>No result</em>
                          : <span>
                              [{result.platform}] : {result.id}
                            </span>}
                      </li>
                    )
                  })}
                </ul>}
          </div>
        </div>
      </div>
    )
  }
}

export default LinkList
