import { createParams } from '@/utils'
import api from '../api'

export const getArticleTagListByCategory = async (category: string) => {
  const { result } = await api.get<null, Article.TagDTO>(
    `/api/v1/${category}/tag`
  )

  return result
}

export const getArticleMainContentByCategory = async (
  category: string,
  params: Article.MainContentParams
) => {
  const { result } = await api.get<null, Article.MainContentDTO>(
    `/api/v1/article/${category}?${createParams(params)}`
  )

  return result
}

export const getArticleDetailContentByCategoryById = async (
  category: string,
  id: number
) => {
  const { result } = await api.get<null, Article.BaseDetailContentDTO>(
    `/api/v1/article/${category}/${id}`
  )

  return result
}

export const getArticleNoticeList = async (category: string) => {
  const { result } = await api.get<null, Article.NoticeDTO>(
    `/api/v1/article/${category}/announce`
  )

  return result
}

export const getArticleCommentListByCategoryById = async (
  category: string,
  id: number
) => {
  const { result } = await api.get<null, Article.CommentDTO>(
    `/api/v1/article/${category}/${id}/comment`
  )

  return result
}

export const getArticleListBySearchString = async (
  category: string,
  method: string,
  param: string
) => {
  const { result } = await api.get<null, Article.MainContentDTO>(
    `/api/v1/${category}/${method}?${param}`
  )

  return result
}

export const getPopularArticleList = async () => {
  const { result } = await api.get<null, Article.PopularDTO>(
    `/api/v1/article/top-posts`
  )

  return result
}

export const createArticle = (item: Article.ArticleCreateRequestDto) => {
  return api.post<
    null,
    Article.ArticleCreateResponseDTO,
    Article.ArticleCreateRequestDto
  >('/api/v1/article', item)
}

export const createComment = (item: Article.CommentCreateRequestDto) => {
  return api.post<
    null,
    Article.CommentCreateResponseDto,
    Article.CommentCreateRequestDto
  >('/api/v1/comment', item)
}

export const toggleArticleLike = (item: number) => {
  return api.post<null, Article.LikeResponseDto, null>(
    `/api/v1/article/${item}/vote`
  )
}

export const toggleCommentLike = (item: number) => {
  return api.post<null, Article.LikeResponseDto, null>(
    `/api/v1/comment/${item}/vote`
  )
}
