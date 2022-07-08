import styled from '@emotion/styled'

export const StyledNavigationButton = styled.button(() => {
  return {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'height': '60px',
    'width': '60px',
    'backgroundColor': '#253755',
    'borderRadius': '50%',
    'cursor': 'pointer',

    '&:disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
  }
})

export const StyledSeparator = styled('div')(() => {
  return {
    height: '1px',
    backgroundColor: '#2F3D57',
    width: '100%',
  }
})
