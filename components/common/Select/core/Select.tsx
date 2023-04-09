import { type ReactNode, type HTMLAttributes } from 'react'
import { isFunction } from '@/utils'
import { type SelectContextType, useSelectContext } from './context'
import { type Option } from './type'

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'> {
  onClick?: (option: Option) => void
  children:
    | ReactNode
    | ((props: Pick<SelectContextType, 'isOpen' | 'selected'>) => ReactNode)
}

const Select = ({ children, onClick, tabIndex, ...props }: Props) => {
  const { isOpen, selected, toggleOpen } = useSelectContext()

  const onClickSelect = () => {
    toggleOpen()
    onClick?.(selected)
  }

  return (
    <div
      onClick={onClickSelect}
      role="listbox"
      tabIndex={tabIndex ?? 0}
      {...props}
    >
      {isFunction(children) ? children({ isOpen, selected }) : children}
    </div>
  )
}

export default Select
