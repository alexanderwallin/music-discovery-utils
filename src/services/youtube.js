import axios from 'axios'

import { Platform } from 'src/constants.js'

/**
 * https://console.developers.google.com/apis/credentials?folder=&organizationId=&project=pro-equinox-215518
 */
const YOUTUBE_API_KEY = 'AIzaSyALoG2lI4IbZwrBoQlldpy29ZOILw-49aQ'
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
