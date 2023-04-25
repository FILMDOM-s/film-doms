import * as banner from './banner'
import * as article from './article'

export const handlers = [...Object.values(banner), ...Object.values(article)]
