import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import {
  createArticle,
  createComment,
  toggleArticleLike,
  toggleCommentLike,
} from './apis'

export const useCreateArticle = (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof createArticle>>,
    unknown,
    Parameters<typeof createArticle>[0]
  >
) => {
  return useMutation(createArticle, options)
}

export const useCreateComment = () => {
  return useMutation(createComment)
}

export const useToggleArticleLike = () => {
  return useMutation(toggleArticleLike)
}

export const useToggleCommentLike = () => {
  return useMutation(toggleCommentLike)
}
