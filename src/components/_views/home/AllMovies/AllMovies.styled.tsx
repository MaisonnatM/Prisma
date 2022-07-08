import styled from '@emotion/styled'

export const StyledButton = styled('button')<{ active?: boolean }>(({ active, theme }) => {
  return {
    'height': '40px',
    'padding': '0 20px',
    'fontSize': '12px',
    'color': theme.color.primary,
    'borderRadius': '40px',
    'backgroundColor': 'transparent',
    'border': `1px solid ${theme.color.primary}`,
    'transition': 'all ease-in-out 0.2s',
    'cursor': 'pointer',

    ...(active && {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    }),

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  }
})
