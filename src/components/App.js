import { h, Component } from 'preact'
import { Route } from 'react-router-dom'

import Header from 'src/components/Header.js'
import LinkLists from 'src/components/LinkLists.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div>
          <Route exact path="/" render={() => <p>🎷</p>} />
          <Route exact path="/link-lists" component={LinkLists} />
        </div>
      </div>
    )
  }
}
