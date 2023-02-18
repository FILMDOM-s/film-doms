const queryKeys = {
  banner: ['banner'],

  reviews: ['reviews'],
  review: (id: Review['id']) => ['review', id],

  communities: ['communities'],
  community: (id: Community['id']) => ['community', id],

  comments: ['comments'],
  comment: (id: Comment['id']) => ['comment', id],

  notices: ['notices'],
  notice: (id: Notice['id']) => ['notice', id],

  critics: ['critics'],
  critic: (id: Critic['id']) => ['critic', id],
} as const

export default queryKeys
