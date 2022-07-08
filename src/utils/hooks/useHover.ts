import { useState } from 'react'

type TProps = {
  isHover: boolean
  hoverProps: {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
}

export const useHover = (): TProps => {
  const [isHover, setHover] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }

  return { isHover, hoverProps }
}
