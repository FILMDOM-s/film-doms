import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import {
  createArticle,
  createComment,
  deleteArticle,
  toggleArticleLike,
  toggleCommentLike,
  updateArticle,
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

export const useUpdateArticle = () => {
  return useMutation(updateArticle)
}

export const useDeleteArticle = () => {
  return useMutation(deleteArticle)
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
