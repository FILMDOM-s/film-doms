const queryKeys = {
  banner: ['banner'],

  reviews: ['reviews'],
  review: (id: Review['id']) => ['review', id],

  recents: ['recents'],
  recent: (id: Recent['id']) => ['recent', id],

  comments: ['comments'],
  comment: (id: Comment.Parent['id']) => ['comment', id],

  notices: ['notices'],
  notice: (id: Notice['id']) => ['notice', id],

  critics: ['critics'],
  critic: (id: Critic['id']) => ['critic', id],

  articleByCategory: (category: Article.Category, params: Article.Params) => [
    'article',
    category,
    ...Object.values(params),
  ],

  tagsByCategory: (category: Article.Category) => ['tags', category],

  articleNotice: ['articleNotice'],

  article: (id: Article.Item['id']) => ['article', id],
} as const

export default queryKeys
