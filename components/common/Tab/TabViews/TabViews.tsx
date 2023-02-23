import { isFunction } from '@/utils'
import { TabContextType, useTab } from '../context'

interface Props extends Omit<React.ComponentProps<'div'>, 'children'> {
  children:
    | (({ selected }: Pick<TabContextType, 'selected'>) => React.ReactNode)
    | React.ReactNode
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
