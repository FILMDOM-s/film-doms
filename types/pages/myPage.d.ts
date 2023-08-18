declare module User {
  type InterestMovie = string

  type Info = {
    id: number
    email: string
    nickname: string
    profileImage: {
      id: number
      uuidFileName: string
    }
    accountRole: string
    accountStatus: string
    favoriteMovies: string[]
    socialLogin: boolean
    registeredAt: number
    password?: string
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
      id: number
      category: string
      tag: string
      title: string
      status: string
      createdAt: number
      updatedAt: number
      views: number
      likes: number
      commentCount: number
      containImage: boolean
    }

    type ArticleDTO = {
      resultCode: string
      result: {
        articles: Article[]
        pageInfo: {
          pageNumber: number
          pageSize: number
          totalPages: number
          totalElements: number
          numberOfElements: number
        }
      }
    }

    type Comment = {
      id: number
      content: string
      status: string
      likes: number
      createdAt: number
      updatedAt: number
      article: {
        id: number
        category: string
      }
    }

    type CommentDTO = {
      resultCode: string
      result: {
        comments: Comment[]
        pageInfo: {
          pageNumber: number
          pageSize: number
          totalPages: number
          totalElements: number
          numberOfElements: number
        }
      }
    }
  }

  declare module UpdateProfile {
    type Params = {
      imageId?: number
    }
  }
}
