import * as community from './community'
import * as review from './review'
import * as banner from './banner'
import * as critic from './critic'
import * as notice from './notice'

export const handlers = [
  ...Object.values(community),
  ...Object.values(review),
  ...Object.values(banner),
  ...Object.values(critic),
  ...Object.values(notice),
]
