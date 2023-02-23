import { TabContextType, useTab } from '../context'
import { isFunction } from '@/utils'

interface Props extends Omit<React.ComponentProps<'div'>, 'children'> {
  children:
    | (({ selected }: Pick<TabContextType, 'selected'>) => React.ReactNode)
    | React.ReactNode
}

const TabList = ({ children, ...rest }: Props) => {
  const { selected } = useTab()

  return (
    <div {...rest}>
      {isFunction(children) ? children({ selected }) : children}
    </div>
  )
}

export default TabList
