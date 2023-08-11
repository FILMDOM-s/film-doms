import { useRecoilState } from 'recoil'
import { useCallback, useState } from 'react'
import { profileModalState } from '@/states'

export type ThemeType = 'dark' | 'white'

export type OpenProfileModalType = {
  title: string
  content: JSX.Element | string
  callback?: () => any
  theme?: ThemeType
  clientX: number
  clientY: number
}

export const useProfileModal = () => {
  const [profileModalDataState, setProfileModalDataState] =
    useRecoilState(profileModalState)
  const [animation, setAnimation] = useState<
    'open-profile-modal' | 'close-profile-modal'
  >('open-profile-modal')

  const closeModal = useCallback(() => {
    setAnimation('close-profile-modal')
    setTimeout(() => {
      setProfileModalDataState(prev => {
        return { ...prev, isOpen: false }
      })
      setAnimation('open-profile-modal')
    }, 270)
  }, [setProfileModalDataState])

  const openModal = useCallback(
    ({
      title,
      content,
      callback,
      theme,
      clientX,
      clientY,
    }: OpenProfileModalType) => {
      setProfileModalDataState({
        isOpen: true,
        title,
        content,
        callBack: callback,
        theme: theme || 'dark',
        clientX,
        clientY,
      })
    },
    [setProfileModalDataState]
  )

  const toggleModal = useCallback(
    ({
      title,
      content,
      callback,
      theme,
      clientX,
      clientY,
    }: OpenProfileModalType) => {
      if (profileModalDataState.isOpen) {
        closeModal()
      } else {
        openModal({
          title,
          content,
          callback,
          theme,
          clientX,
          clientY,
        })
      }
    },
    [profileModalDataState.isOpen, closeModal, openModal]
  )

  return {
    animation,
    profileModalDataState,
    closeModal,
    openModal,
    toggleModal,
  }
}
