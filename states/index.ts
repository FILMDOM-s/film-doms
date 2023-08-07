import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

type ModalType = {
  isOpen: boolean
  title: string
  content: JSX.Element | string
  callBack?: () => any
  theme: 'dark' | 'white'
}

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    isOpen: false,
    title: '',
    content: '',
    theme: 'dark',
  },
})

export const pureModalState = atom<ModalType>({
  key: 'pureModalState',
  default: {
    isOpen: false,
    title: '',
    content: '',
    theme: 'dark',
  },
})

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
