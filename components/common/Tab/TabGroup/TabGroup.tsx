import { TabContext, type TabContextType } from '../context'

interface Props
  extends Required<React.PropsWithChildren>,
    TabContextType,
    Omit<React.ComponentProps<'div'>, 'children' | 'onChange'> {}

const TabGroup = ({ children, selected, onChange, ...rest }: Props) => {
  return (
    <TabContext.Provider
      value={{
        selected,
        onChange,
      }}
    >
      <div {...rest}>{children}</div>
    </TabContext.Provider>
  )
}

export default TabGroup
