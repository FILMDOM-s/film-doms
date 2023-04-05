import { type ReactNode, useState, useMemo } from 'react'
import { isFunction } from '@/utils'
import {
  type SelectContextType,
  SelectModalContext,
  useSelectContext,
} from './context'
import RenderIf from '../../RenderIf'

interface Props {
  children:
    | ReactNode
    | ((props: Pick<SelectContextType, 'isOpen'>) => ReactNode)
}

const SelectModal = ({ children }: Props) => {
  const { isOpen } = useSelectContext()
  const [unMount, setUnMount] = useState(!isOpen)

  const mountModal = () => {
    setUnMount(false)
  }

  const unMountModal = () => {
    setUnMount(true)
  }

  const value = useMemo(
    () => ({
      mountModal,
      unMountModal,
    }),
    []
  )

  return (
    <SelectModalContext.Provider value={value}>
      <RenderIf
        condition={isOpen || !unMount}
        render={isFunction(children) ? children({ isOpen }) : children}
      />
    </SelectModalContext.Provider>
  )
}

export default SelectModal
