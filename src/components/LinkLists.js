import { h, Component } from 'preact'
import { autobind } from 'core-decorators'

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
    console.log('handleQueryChange', { evt })
    this.setState(
      () => ({
        query: evt.target.value,
        isLoading: true,
      }),
      () => {
        setTimeout(() => {
          this.setState(() => ({
            isLoading: false,
            results: [Date.now()],
          }))
        }, 2000)
      }
    )
  }

  render(props, { query, isLoading, results }) {
    return (
      <div className="LinkList">
        <h1>Link List Creator</h1>

        <h2>Query</h2>

        <textarea
          placeholder="Paste titles or URLs here"
          value={query}
          onChange={this.handleQueryChange}
        />

        <hr />

        <h2>Results</h2>

        {isLoading
          ? <p>Loading...</p>
          : <ul>
              {results.map(result =>
                <li key={result}>
                  {result}
                </li>
              )}
            </ul>}
      </div>
    )
  }
}

export default LinkList
