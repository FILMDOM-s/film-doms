import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

type ModalType = {
  isOpen: boolean
  title: string
  content: JSX.Element | string
  callBack?: () => any
  theme: 'dark' | 'white'
  clientX?: number
  clientY?: number
}

type ContextMenuType = {
  isOpen: boolean
  clientX: number
  clientY: number
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

export const loginTypeState = atom<'done' | 'none'>({
  key: 'loginType',
  default: 'none',
  effects_UNSTABLE: [persistAtom],
})

export const sideProfileState = atom<boolean>({
  key: 'sideProfileState',
  default: false,
})

export const profileModalState = atom<ModalType>({
  key: 'profileModalState',
  default: {
    isOpen: false,
    title: '',
    content: '',
    theme: 'dark',
    clientX: 0,
    clientY: 0,
  },
})

export const contextMenuState = atom<ContextMenuType>({
  key: 'contextMenuState',
  default: {
    isOpen: false,
    clientX: 0,
    clientY: 0,
  },
})

export const lockState = atom<boolean>({
  key: 'lockState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
