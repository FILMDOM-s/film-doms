import { type ReactNode, type ComponentProps } from 'react'
import { isFunction } from '@/utils'
import { type TabContextType, useTab } from '../context'

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  children:
    | (({
        selected,
        isActive,
      }: Pick<TabContextType, 'selected'> & {
        isActive: boolean
      }) => ReactNode)
    | ReactNode
  value: TabContextType['selected']
}

const TabItem = ({ children, value, ...rest }: Props) => {
  const { selected, onChange } = useTab()

  const onClickChange = () => {
    onChange(value)
  }

  return (
    <div onClick={onClickChange} {...rest}>
      {isFunction(children)
        ? children({ selected, isActive: selected === value })
        : children}
    </div>
  )
}

export default TabItem
