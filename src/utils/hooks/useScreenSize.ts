import { useEffect, useState } from 'react'
import {
  DESKTOP_QUERY,
  TABLET_QUERY,
  SMALL_TABLET_QUERY,
  MOBILE_QUERY,
} from '../styles/_tokens/breakpoint'

type TRes = {
  isDesktop: boolean
  isTablet: boolean
  isSmallTablet: boolean
  isMobile: boolean
}
const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const updateMatch = () => setMatch(window.matchMedia(query).matches)

    updateMatch()

    if (typeof window.matchMedia(query).addListener == 'function') {
      window.matchMedia(query).addListener(updateMatch)
    } else {
      window.matchMedia(query).addEventListener('change', updateMatch)
    }
    return () => {
      if (typeof window.matchMedia(query).removeListener == 'function') {
        window.matchMedia(query).removeListener(updateMatch)
      } else {
        window.matchMedia(query).removeEventListener('change', updateMatch)
      }
    }
  }, [query])

  return match
}

export const useScreenSize = (): TRes => {
  const isDesktop = useMediaQuery(DESKTOP_QUERY)
  const isTablet = useMediaQuery(TABLET_QUERY)
  const isSmallTablet = useMediaQuery(SMALL_TABLET_QUERY)
  const isMobile = useMediaQuery(MOBILE_QUERY)

  return {
    isDesktop: isDesktop && !(isTablet || isSmallTablet || isMobile),
    isTablet: isTablet && !(isSmallTablet || isMobile),
    isSmallTablet: isSmallTablet && !isMobile,
    isMobile,
  }
}
