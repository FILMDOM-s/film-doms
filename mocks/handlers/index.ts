import * as recent from './recent'
import * as review from './review'
import * as banner from './banner'
import * as critic from './critic'
import * as notice from './notice'

export const handlers = [
  ...Object.values(recent),
  ...Object.values(review),
  ...Object.values(banner),
  ...Object.values(critic),
  ...Object.values(notice),
]
