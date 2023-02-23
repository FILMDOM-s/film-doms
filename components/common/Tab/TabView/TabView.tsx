import { isFunction } from '@/utils'
import { TabContextType, useTab } from '../context'

interface Props extends Omit<React.ComponentProps<'div'>, 'children'> {
  children:
    | (({
        selected,
        isActive,
      }: Pick<TabContextType, 'selected'> & {
        isActive: boolean
      }) => React.ReactNode)
    | React.ReactNode
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
