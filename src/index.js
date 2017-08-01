import { h, render } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import 'preact/devtools'

import App from 'src/components/App.js'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
)
