/* global document */
import { h, render } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'preact/devtools'

import App from 'src/components/App.js'
import store from 'src/redux/store.js'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
)
