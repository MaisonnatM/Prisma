import React, { FunctionComponent, useMemo } from 'react'

import { AllIcons } from './Icon.constants'
import { StyledIcon, StyledIconProps } from './Icon.styled'

type Props = {
  icon: keyof typeof AllIcons
} & Partial<StyledIconProps>

export const Icon: FunctionComponent<Props> = ({ icon, ...props }) => {
  const IconComponent = useMemo(() => {
    if (!Object.keys(AllIcons).includes(icon)) {
      return <></>
    }

    return AllIcons[icon]
  }, [icon])

  return (
    <StyledIcon {...(props as StyledIconProps)}>
      <IconComponent />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  icon: 'logo',
  color: 'primary',
  size: 'medium',
}

export type IconProps = Props
