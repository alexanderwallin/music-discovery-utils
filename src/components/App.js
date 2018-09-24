import { h, Component } from 'preact'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from 'src/components/Header.js'
import LinkLists from 'src/components/LinkLists.js'

const AppContainer = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
`

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />

        <div>
          <Route exact path="/" render={() => <p>🎷</p>} />
          <Route exact path="/link-lists" component={LinkLists} />
        </div>
      </AppContainer>
    )
  }
}
