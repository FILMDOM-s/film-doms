import * as recent from './recent'
import * as review from './review'
import * as banner from './banner'
import * as critic from './critic'
import * as notice from './notice'
import * as article from './article'
import * as tag from './tag'
import * as popular from './popular'

export const handlers = [
  ...Object.values(recent),
  ...Object.values(review),
  ...Object.values(banner),
  ...Object.values(critic),
  ...Object.values(notice),
  ...Object.values(article),
  ...Object.values(tag),
  ...Object.values(popular),
]
