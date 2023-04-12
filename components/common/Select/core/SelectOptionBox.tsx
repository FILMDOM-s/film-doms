import { type ReactNode, type HTMLAttributes, Fragment } from 'react'
import { Option } from './type'
import { useSelectContext, useSelectModalContext } from './context'
import { isFunction } from '@/utils'

interface ChildrenProps {
  option: Option
}

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode | ((props: ChildrenProps) => ReactNode)
}

const SelectOptionBox = ({ children, ...props }: Props) => {
  const { options, isOpen } = useSelectContext()
  const { mountModal, unMountModal } = useSelectModalContext()

  return (
    <div
      onAnimationEnd={() => {
        isOpen ? mountModal() : unMountModal()
      }}
      {...props}
    >
      {options.map(option => {
        return (
          <Fragment key={option.value}>
            {isFunction(children) ? children({ option }) : children}
          </Fragment>
        )
      })}
    </div>
  )
}

export default SelectOptionBox
