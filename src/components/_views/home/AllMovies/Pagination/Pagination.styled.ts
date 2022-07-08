import styled from '@emotion/styled'

export const StyledButton = styled('button')<{ active?: boolean; disabled?: boolean }>(
  ({ active }) => {
    return {
      'height': '40px',
      'width': '40px',
      'borderRadius': '50%',
      'border': '2px solid #253755',
      'background': active ? '#253755' : 'transparent',
      'color': '#586E94',
      'fontSize': '1.6rem',
      'transition': 'all ease-in-out 0.3s',
      'cursor': active ? 'auto' : 'pointer',
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',

      '&:hover': {
        background: '#253755',
      },

      '&:disabled': {
        opacity: '.4',
        cursor: 'not-allowed',
      },
    }
  },
)
