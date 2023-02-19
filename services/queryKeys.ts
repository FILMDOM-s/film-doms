const queryKeys = {
  banner: ['banner'],

  reviews: ['reviews'],
  review: (id: Review['id']) => ['review', id],

  recents: ['recents'],
  recent: (id: Recent['id']) => ['recent', id],

  comments: ['comments'],
  comment: (id: Comment['id']) => ['comment', id],

  notices: ['notices'],
  notice: (id: Notice['id']) => ['notice', id],

  critics: ['critics'],
  critic: (id: Critic['id']) => ['critic', id],
} as const

export default queryKeys
