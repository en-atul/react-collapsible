import {useEffect, useState} from 'react'

export function useWindowSize(): {
  windowSize: {width?: number | undefined; height?: number | undefined}
} {
  const [windowSize, setWindowSize] = useState<{
    width?: number
    height?: number
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {windowSize}
}
