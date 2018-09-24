import axios from 'axios'

import { Platform } from 'src/constants.js'

const YOUTUBE_API_KEY = 'AIzaSyCt4PxBhWb9mT6js7-bxK6kF5Gl45fV1fY'
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3'

const getQueryUrl = query =>
  `${YOUTUBE_API_URL}/search?q=${query}&key=${YOUTUBE_API_KEY}&part=snippet&type=video&maxResults=1`

export default async function getYoutubeResult(query) {
  const response = await axios.get(getQueryUrl(query))
  const results = {
    query,
    platform: Platform.YOUTUBE,
    id:
      response.data.items.length > 0 ? response.data.items[0].id.videoId : null,
  }

  return results
}
