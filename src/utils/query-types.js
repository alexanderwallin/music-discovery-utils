import isAbsoluteUrl from 'is-absolute-url'

import { QueryType } from 'src/constants.js'

export const getQueryType = query => {
  if (isAbsoluteUrl(query)) {
    return QueryType.YOUTUBE_URL
  } else {
    return QueryType.FREE_TEXT
  }
}
