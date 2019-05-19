/* eslint import/prefer-default-export: 0 */
import isAbsoluteUrl from 'is-absolute-url'

import { QueryType } from 'src/constants.js'

export const getQueryType = query => {
  let type = QueryType.FREE_TEXT

  if (isAbsoluteUrl(query) === true) {
    if (/youtu\.?be/.test(query) === true) {
      type = QueryType.YOUTUBE_URL
    } else if (/spotify/.test(query) === true) {
      type = QueryType.SPOTIFY_URL
    }
  }

  return type
}
