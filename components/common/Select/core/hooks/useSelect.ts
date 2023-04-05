import { type KeyboardEvent, useState, useRef } from 'react'
import { useOutsideClickEffect } from '@/hooks'
import { Option } from '../type'

const useSelect = (options: Option[]) => {
  const ref = useRef<HTMLDivElement>(null)
  const [selectIndex, setSelectIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectIndex(prev => Math.max(prev - 1, 0))
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setSelectIndex(Math.min(selectIndex + 1, options.length - 1))
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      setIsOpen(prev => !prev)
    }
  }

  const onClose = () => {
    setIsOpen(false)
  }

  const onSelect = (option: Option) => {
    setSelectIndex(options.findIndex(({ value }) => value === option.value))
    onClose()
  }

  useOutsideClickEffect(() => {
    onClose()
  }, [ref.current])

  return {
    selected: options[selectIndex],
    isOpen,
    onKeyDown,
    onSelect,
    toggleOpen: () => setIsOpen(prev => !prev),
    ref,
  }
}

export default useSelect
