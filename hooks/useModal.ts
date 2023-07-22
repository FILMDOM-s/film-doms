import { useRecoilState } from 'recoil'
import { useCallback, useState } from 'react'
import { modalState } from '@/states'

export type ThemeType = 'dark' | 'white'

export type OpenModalType = {
  title: string
  content: JSX.Element | string
  callback?: () => any
  theme?: ThemeType
}

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState)
  const [animation, setAnimation] = useState<'open-modal' | 'close-modal'>(
    'open-modal'
  )

  const closeModal = useCallback(() => {
    setAnimation('close-modal')
    setTimeout(() => {
      setModalDataState(prev => {
        return { ...prev, isOpen: false }
      })
      setAnimation('open-modal')
    }, 270)
  }, [setModalDataState])

  const openModal = useCallback(
    ({ title, content, callback, theme }: OpenModalType) => {
      setModalDataState({
        isOpen: true,
        title: title,
        content: content,
        callBack: callback,
        theme: theme || 'dark',
      })
    },
    [setModalDataState]
  )

  return { animation, modalDataState, closeModal, openModal }
}
