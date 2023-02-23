import { TabContextType, useTab } from '../context'
import { isFunction } from '@/utils'

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
