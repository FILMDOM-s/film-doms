import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  deleteUser,
  updateFavoriteMovie,
  updateNickname,
  updatePassword,
  updateUserProfile,
} from './apis'
import queryKeys from '../queryKeys'

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient()

  return useMutation(updateUserProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.myPage.userInfo,
      })
    },
  })
}

export const useUpdatePassword = () => {
  const queryClient = useQueryClient()

  return useMutation(updatePassword, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.myPage.userInfo,
      })
    },
  })
}

export const useUpdateFavoriteMovie = () => {
  const queryClient = useQueryClient()

  return useMutation(updateFavoriteMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.myPage.userInfo,
      })
    },
  })
}

export const useDeleteUser = () => {
  return useMutation(deleteUser)
}

export const useUpdateNickname = () => {
  const queryClient = useQueryClient()

  return useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.myPage.userInfo,
      })
    },
  })
}
