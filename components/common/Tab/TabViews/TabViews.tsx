import { type ComponentProps, type ReactNode } from 'react'
import { isFunction } from '@/utils'
import { type TabContextType, useTab } from '../context'

interface Props extends Omit<ComponentProps<'div'>, 'children'> {
  children:
    | (({ selected }: Pick<TabContextType, 'selected'>) => ReactNode)
    | ReactNode
}

const TabViews = ({ children, ...rest }: Props) => {
  const { selected } = useTab()

  return (
    <div {...rest}>
      {isFunction(children) ? children({ selected }) : children}
    </div>
  )
}

export default TabViews
