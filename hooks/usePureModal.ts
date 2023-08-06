import { useRecoilState } from 'recoil'
import { useCallback, useState } from 'react'
import { pureModalState } from '@/states'

export type ThemeType = 'dark' | 'white'

export type OpenModalType = {
  title: string
  content: JSX.Element | string
  callback?: () => any
  theme?: ThemeType
}

export const usePureModal = () => {
  const [pureModalDataState, setPureModalDataState] =
    useRecoilState(pureModalState)
  const [animation, setAnimation] = useState<'open-modal' | 'close-modal'>(
    'open-modal'
  )

  const closeModal = useCallback(() => {
    setAnimation('close-modal')
    setTimeout(() => {
      setPureModalDataState(prev => {
        return { ...prev, isOpen: false }
      })
      setAnimation('open-modal')
    }, 270)
  }, [setPureModalDataState])

  const openModal = useCallback(
    ({ title, content, callback, theme }: OpenModalType) => {
      setPureModalDataState({
        isOpen: true,
        title: title,
        content: content,
        callBack: callback,
        theme: theme || 'dark',
      })
    },
    [setPureModalDataState]
  )

  return { animation, pureModalDataState, closeModal, openModal }
}
