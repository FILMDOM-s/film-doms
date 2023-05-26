import { type UseMutationOptions, useMutation } from '@tanstack/react-query'
import { createArticle } from './apis'

export const useCreateArticle = (
  options?: UseMutationOptions<
    Awaited<ReturnType<typeof createArticle>>,
    unknown,
    Parameters<typeof createArticle>[0]
  >
) => {
  return useMutation(createArticle, options)
}
