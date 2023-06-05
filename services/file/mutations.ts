import { useMutation } from '@tanstack/react-query'
import { imageUpload } from './apis'

export const useImageUpload = () => {
  return useMutation(imageUpload)
}
