/* global __dirname */
/* eslint no-console: 0 */
/* eslint new-cap: 0 */
const path = require('path')
const express = require('express')
const axios = require('axios')
const qs = require('qs')

const app = new express()
app.set('port', process.env.PORT || 8581)
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Fetches and returns a Spotify access token
 */
app.post('/authentication/spotify', async (req, res) => {
  try {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

    const url = 'https://accounts.spotify.com/api/token'

    const data = qs.stringify({ grant_type: 'client_credentials' })

    const bearerToken = Buffer.from(
      `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
    ).toString('base64')
    const headers = {
      Authorization: `Basic ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    const response = await axios({ method: 'POST', url, data, headers })
    return res.json({
      status: 'ok',
      data: {
        accessToken: response.data.access_token,
      },
    })
  } catch (err) {
    console.log(err)
    return res.json({
      status: 'error',
      error: err.message,
    })
  }
})

/**
 * Default request handler
 */
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

// Run app
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
