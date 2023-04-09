import { type KeyboardEvent, createContext, useContext } from 'react'
import { type Option } from './type'

export type SelectContextType = {
  options: Option[]
  selected: Option
  isOpen: boolean
  onSelect: (option: Option) => void
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void
  toggleOpen: VoidFunction
}

export const SelectContext = createContext<SelectContextType | null>(null)

export const useSelectContext = () => {
  const context = useContext(SelectContext)

  if (context === null) {
    throw new Error('Select Group 내부에서 사용해주세요.')
  }

  return context
}

export type SelectModalContextType = {
  mountModal: VoidFunction
  unMountModal: VoidFunction
}

export const SelectModalContext = createContext<SelectModalContextType | null>(
  null
)

export const useSelectModalContext = () => {
  const context = useContext(SelectModalContext)

  if (context === null) {
    throw new Error('Select Modal 내부에서 사용해주세요.')
  }

  return context
}
