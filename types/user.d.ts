declare module User {
  type InterestMovie = string

  type InterestMovieDTO = {
    resultCode: string
    result: InterestMovie[]
  }

  type Info = {
    id: string
    email: string
    nickname: string
    password: string
    createdAt: string
    profileImage: {
      id: string
      uuidFileName: string
    }
  }

  type InfoDTO = {
    resultCode: string
    result: Info
  }

  declare module Activity {
    type Params = {
      page?: number
      size?: number
    }

    type Article = {
      id: string
      tag: string
      title: string
      createdAt: string
      views: number
      likes: number
      containImage: boolean
    }

    type ArticleDTO = {
      resultCode: string
      result: {
        content: Article[]
        totalElements: number
        totalPages: number
        size: number
      }
    }

    type Comment = {
      id: string
      content: string
      childrenCommentCount: number
      createdAt: string
    }

    type CommentDTO = {
      resultCode: string
      result: {
        content: Comment[]
        totalElements: number
        totalPages: number
        size: number
      }
    }
  }
}
