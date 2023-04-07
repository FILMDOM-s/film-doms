import { type ComponentProps, type ReactNode } from 'react'
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

const TabView = ({ children, value, ...rest }: Props) => {
  const { selected } = useTab()

  return (
    <div {...rest}>
      {isFunction(children)
        ? children({ selected, isActive: selected === value })
        : children}
    </div>
  )
}

export default TabView
