declare module Article {
  type Params = {
    page: number
    limit: number
    tag?: Tag
  }

  type Category = 'movie' | 'filmUniverse'

  type Item = {
    id: number
    tag: Tag
    isContainImage: boolean
    title: string
    comments: Comment['id'][]
    writer: User
    createAt: string
    updateAt: string
    views: number
    likes: number
    category: Category
  }

  type Response = {
    totalPage: number
    items: Item[]
  }

  type Notice = {
    id: number
    tag: Tag
    isContainImage: boolean
    title: string
    comments: Comment['id'][]
    writer: User
    createAt: string
    updateAt: string
    views: number
    likes: number
    category: 'notice'
  }
}
