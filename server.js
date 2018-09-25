/* global __dirname */
/* eslint no-console: 0 */
/* eslint new-cap: 0 */
const path = require('path')
const express = require('express')

const app = new express()
app.set('port', process.env.PORT || 8581)
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(app.get('port'), error => {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
      app.get('port'),
      app.get('port')
    )
  }
})
