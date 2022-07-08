import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { FunctionComponent, PropsWithChildren } from 'react'

import { border, breakpoint, color, elevation, gap, icon, spacing, text } from '../../utils'

export const theme = {
  gap,
  color,
  border,
  elevation,
  spacing,
  text,
  icon,
  breakpoint,
}

export type TTheme = typeof theme

export const ThemeProvider: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}
