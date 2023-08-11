import { useRecoilState } from 'recoil'
import { useCallback, useEffect, useRef } from 'react'
import { contextMenuState } from '@/states'

export const useContextMenu = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [, setContextMenuDataState] = useRecoilState(contextMenuState)

  const handleContextMenu = useCallback(
    (event: any) => {
      event.preventDefault()
      event.stopPropagation()
      setContextMenuDataState({
        isOpen: true,
        clientX: event.clientX,
        clientY: event.clientY,
      })
    },
    [setContextMenuDataState]
  )

  const handleClick = useCallback(() => {
    setContextMenuDataState({
      isOpen: false,
      clientX: 0,
      clientY: 0,
    })
  }, [setContextMenuDataState])

  useEffect(() => {
    const refCurrent = ref.current
    if (refCurrent) {
      refCurrent.addEventListener('click', handleContextMenu)
      document.addEventListener('click', handleClick)
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('click', handleContextMenu)
        refCurrent.removeEventListener('click', handleClick)
      }
    }
  }, [ref, handleContextMenu, handleClick])

  return { ref }
}
