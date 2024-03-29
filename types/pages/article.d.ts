declare module Article {
  type ProfileImage = {
    id: number
    uuidFileName: string
  }

  type Author = {
    id: number
    nickname: string
    profileImage: ProfileImage
  }

  type Tag = {
    tag: string
    description: string
  }

  type TagDTO = {
    resultCode: string
    result: Tag[]
  }

  type TemplateDTO = {
    resultCode: string
    result: {
      editorContent: string
    }
  }

  type MainContent = {
    id: number
    category: string
    tag: string
    title: string
    author: Author
    createdAt: number
    updatedAt: number
    views: number
    likes: number
    commentCount: number
    mainImage: string
    containImage: boolean
    content: string
    description: string
  }

  type MainContentParams = {
    tag?: string
    page?: number
    size?: number
  }

  type MainContentDTO = {
    resultCode: string
    result: {
      content: MainContent[]
      pageable: {
        sort: {
          empty: boolean
          sorted: boolean
          unsorted: boolean
        }
        offset: number
        pageSize: number
        pageNumber: number
        paged: boolean
        unpaged: boolean
      }
      last: boolean
      totalPages: number
      totalElements: number
      size: number
      number: number
      sort: {
        empty: boolean
        sorted: boolean
        unsorted: boolean
      }
      first: boolean
      numberOfElements: number
      empty: boolean
    }
  }

  type BaseDetailContent = {
    id: number
    category: string
    tag: string
    title: string
    status: string
    views: number
    likes: number
    liked: boolean
    content: string
    createdAt: number
    updatedAt: number
    author: Author
  }

  type BaseDetailContentDTO = {
    resultCode: string
    result: BaseDetailContent
  }

  type MovieDetailContent = BaseDetailContent

  type MovieDetailContentDTO = {
    resultCode: string
    result: MovieDetailContent
  }

  type FilmUniverseDetailContent = BaseDetailContent & {
    startAt: string
    endAt: string
  }

  type FilmUniverseDetailContentDTO = {
    resultCode: string
    result: FilmUniverseDetailContent
  }

  type CriticDetailContent = BaseDetailContent

  type CriticDetailContentDTO = {
    resultCode: string
    result: CriticDetailContent
  }

  type ChildComment = Omit<Comment, 'childComments'>

  type Comment = {
    id: number
    content: string
    status: string
    likes: number
    createdAt: number
    updatedAt: number
    author: Author
    childComments: ChildComment[]
    managerComment: boolean
  }

  type CommentDTO = {
    resultCode: string
    result: {
      commentCount: number
      comments: Comment[]
    }
  }

  type NoticeItem = {
    id: number
    category: string
    tag: string
    title: string
    author: {
      id: number
      nickname: string
      profileImage: {
        id: number
        uuidFileName: string
      }
    }
    createdAt: number
    updatedAt: number
    views: number
    likes: number
    commentCount: number
    containImage: boolean
  }

  type NoticeDTO = {
    resultCode: string
    result: {
      content: NoticeItem[]
      pageable: {
        sort: {
          empty: boolean
          sorted: boolean
          unsorted: boolean
        }
        offset: number
        pageSize: number
        pageNumber: number
        paged: boolean
        unpaged: boolean
      }
      last: boolean
      totalPages: number
      totalElements: number
      size: number
      number: number
      sort: {
        empty: boolean
        sorted: boolean
        unsorted: boolean
      }
      first: boolean
      numberOfElements: number
      empty: boolean
    }
  }

  type Popular = {
    id: number
    title: string
    author: {
      id: number
      nickname: string
    }
    category: string
    containImage: boolean
  }

  type PopularDTO = {
    resultCode: string
    result: Popular[]
  }

  type ArticleCreateRequestDto = {
    title: string
    category: string
    tag: string
    content: string
    containsImage: string
    startAt?: string
    endAt?: string
  }

  type ArticleUpdateRequestDto = {
    title: string
    category: string
    tag: string
    content: string
    containsImage: string
    startAt?: string
    endAt?: string
  }

  type ArticleCreateResponseContent = {
    id: number
    category: string
  }

  type ArticleCreateResponseDTO = {
    resultCode: string
    result: ArticleCreateResponseContent
  }

  type ArticleUpdateResponseDTO = {
    resultCode: string
    result: null
  }

  type FilmUniverseCreateRequestDto = {
    title: string
    category: string
    tag: string
    content: string
    containsImage: string
    mainImageId: string
  }

  type CriticCreateRequestDto = {
    title: string
    category: string
    tag: string
    content: string
    containsImage: string
    mainImageId: string
  }
  type CommentCreateContent = {
    commentId: number
  }
  type CommentCreateRequestDto = {
    articleId: number
    parentCommentId: number | null
    content: string
  }
  type CommentCreateResponseDto = {
    resultCode: string
    result: CommentCreateContent
  }

  type LikeResponseDto = {
    resultCode: string
    result: LikeContentDto
  }

  type LikeContentDto = {
    isVoted: boolean
    voteCount: number
  }
}
