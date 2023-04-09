import { useCallback, useEffect, useRef } from 'react'

const useOutsideClickEffect = (
  callback: VoidFunction,
  elements: (HTMLElement | null)[]
) => {
  const _elements = useRef<HTMLElement[]>([])

  const onClick = useCallback(
    ({ target }: MouseEvent | TouchEvent) => {
      if (_elements.current.length === 0) {
        return
      }

      if (_elements.current.some(element => element.contains(target as Node))) {
        return
      }

      callback()
    },
    [callback]
  )

  useEffect(() => {
    _elements.current = elements.filter(
      (element): element is HTMLElement => element !== null
    )
  }, [elements])

  useEffect(() => {
    document.addEventListener('click', onClick)
    document.addEventListener('touchstart', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('touchstart', onClick)
    }
  }, [onClick])
}

export default useOutsideClickEffect
