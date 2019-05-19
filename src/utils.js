/* eslint import/prefer-default-export: 0 */
import isAbsoluteUrl from 'is-absolute-url'

import { QueryType } from 'src/constants.js'

export const getQueryType = query => {
  if (isAbsoluteUrl(query)) {
    return QueryType.YOUTUBE_URL
  }

  return QueryType.FREE_TEXT
}
