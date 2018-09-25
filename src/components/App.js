import { h, Component } from 'preact'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import Header from 'src/components/Header.js'
import LinkLists from 'src/components/LinkLists.js'
import injectGlobalStyles from 'src/styles/injectGlobalStyles.js'

injectGlobalStyles()

const AppContainer = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  font-size: 100%;
  line-height: 1.5;
`

const AppContent = styled.div`
  padding-bottom: 40px;
`

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />

        <AppContent>
          <Route exact path="/" render={() => <p>🎷</p>} />
          <Route exact path="/link-lists" component={LinkLists} />
        </AppContent>
      </AppContainer>
    )
  }
}
