import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import {
  createArticle,
  createComment,
  deleteArticle,
  deleteComment,
  toggleArticleLike,
  toggleCommentLike,
  updateArticle,
  updateComment,
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

export const useUpdateComment = () => {
  return useMutation(updateComment)
}

export const useDeleteComment = () => {
  return useMutation(deleteComment)
}

export const useToggleArticleLike = () => {
  return useMutation(toggleArticleLike)
}

export const useToggleCommentLike = () => {
  return useMutation(toggleCommentLike)
}
