import { type ReactNode, type HTMLAttributes } from 'react'
import { isFunction } from '@/utils'
import { useSelectContext } from './context'
import { type Option } from './type'

interface ChildrenProps {
  isSelected: boolean
}

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'> {
  option: Option
  onClick?: (option: Option) => void
  children: ReactNode | ((props: ChildrenProps) => ReactNode)
}

const SelectOption = ({ option, onClick, children, ...props }: Props) => {
  const { selected, onSelect } = useSelectContext()

  const onClickOption = () => {
    onSelect(option)
    onClick?.(option)
  }

  const isSelected = option.value === selected.value

  return (
    <div
      onClick={onClickOption}
      role="option"
      aria-selected={isSelected}
      {...props}
    >
      {isFunction(children) ? children({ isSelected }) : children}
    </div>
  )
}

export default SelectOption
