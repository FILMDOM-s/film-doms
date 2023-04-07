import { type ComponentProps, useCallback, useEffect, useState } from 'react'
import { TabContext, type TabContextType } from '../context'

interface Props
  extends StrictPropsWithChildren,
    Pick<TabContextType, 'selected'>,
    Omit<ComponentProps<'div'>, 'children' | 'onChange'> {
  onChange?: (value: TabContextType['selected']) => void
  clearDependency?: unknown
}

const TabGroup = ({
  children,
  selected: _selected,
  onChange,
  clearDependency,
  ...rest
}: Props) => {
  const [selected, setSelectedTab] = useState(_selected)

  const onChangeSelected = useCallback((value: TabContextType['selected']) => {
    setSelectedTab(value)
    onChange?.(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    onChangeSelected(_selected)
  }, [clearDependency, _selected, onChangeSelected])

  return (
    <TabContext.Provider
      value={{
        selected,
        onChange: onChangeSelected,
      }}
    >
      <div {...rest}>{children}</div>
    </TabContext.Provider>
  )
}

export default TabGroup
