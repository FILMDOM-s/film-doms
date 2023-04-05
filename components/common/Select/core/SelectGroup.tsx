import {
  type HTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react'
import { SelectContext } from './context'
import { type SelectRef, type Option } from './type'
import { useSelect } from './hooks'

interface Props
  extends StrictPropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  options: Option[]
}

const SelectGroup = forwardRef<SelectRef, Props>(
  ({ options, children, ...props }, ref) => {
    const {
      selected,
      isOpen,
      onSelect,
      toggleOpen,
      onKeyDown,
      ref: containerRef,
    } = useSelect(options)

    const value = useMemo(
      () => ({
        options,
        selected,
        isOpen,
        onSelect,
        toggleOpen,
        onKeyDown,
      }),
      [options, selected, isOpen, onSelect, toggleOpen, onKeyDown]
    )

    useImperativeHandle(
      ref,
      () => ({
        selected,
      }),
      [selected]
    )

    return (
      <SelectContext.Provider value={value}>
        <div onKeyDown={onKeyDown} ref={containerRef} {...props}>
          {children}
        </div>
      </SelectContext.Provider>
    )
  }
)

SelectGroup.displayName = 'SelectGroup'

export default SelectGroup
