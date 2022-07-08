import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'
import React from 'react'

import { ThemeProvider } from '../providers'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          *,
            *::after,
            *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }

          html {
            font-size: 62.5%;
          }

          body {
            font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
              'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            position: relative;
            min-height: 100vh;
          }

          a {
            text-decoration: none;
          }

          button {
            border: none;
          }
        `}
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
