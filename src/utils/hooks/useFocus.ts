import { useState } from 'react'

type FocusResult = {
  isFocus: boolean
  setFocus: (focus: boolean) => void
  focusProps: {
    onFocus: () => void
    onBlur: () => void
  }
}

export const useFocus = (): FocusResult => {
  const [isFocus, setFocus] = useState(false)

  const focusProps = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  }

  return { isFocus, setFocus, focusProps }
}
