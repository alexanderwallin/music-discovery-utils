import axios from 'axios'

let accessToken = null

/**
 * Fetches a Spotify access token
 */
async function fetchAccessToken() {
  const {
    data: { data, error },
  } = await axios({
    method: 'POST',
    url: '/authentication/spotify',
  })

  if (error) {
    return null
  }

  return data.accessToken
}

/**
 * Fetches a track from the Spotify URL
 */
export default async function getSpotifyTrack(spotifyUrl) {
  if (accessToken === null) {
    accessToken = await fetchAccessToken()
  }

  const [, trackId] = spotifyUrl.match(
    /^https:\/\/open\.spotify\.com\/track\/(\w+)$/
  )

  const response = await axios.get(
    `https://api.spotify.com/v1/tracks/${trackId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  return response.data
}
