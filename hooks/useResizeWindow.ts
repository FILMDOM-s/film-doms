import { useEffect, useState } from 'react'

const useResizeWindow = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  // resize 될때만 함수 불러오기
  let timer: string | number | NodeJS.Timeout
  const resizeWindow = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // 현재 window width 값
      setWindowWidth(window.innerWidth)
    }, 300)
  }
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', resizeWindow)
    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [windowWidth])

  return windowWidth
}

export default useResizeWindow
