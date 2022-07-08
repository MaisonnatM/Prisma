import { IdType, useFocus } from '@src/utils'
import React, { FunctionComponent } from 'react'

import { Flex } from '../Flex'
import { Icon, IconProps } from '../Icon'
import { StyledIconContainer, StyledInput, StyledInputProps } from './Input.styled'

type Props = {
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  type?: 'text' | 'password' | 'search' | 'number' | 'email'
  placeholder?: string
  icon?: IconProps['icon']
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onIconClick?: () => void
  forwardRef?: React.ForwardedRef<HTMLInputElement>
  min?: number
  max?: number
  autoFocus?: boolean
  step?: number
} & Partial<StyledInputProps & IdType>

export const Input: FunctionComponent<Props> = ({
  name,
  label,
  icon,
  error,
  value = '',
  forwardRef,
  onIconClick,
  ...props
}: Props) => {
  const { focusProps } = useFocus()

  return (
    <Flex position="relative">
      <StyledInput
        tabIndex={1}
        {...focusProps}
        hasValue={!!value}
        value={value}
        hasIcon={!!icon}
        hasLabel={!!label}
        ref={forwardRef}
        error={error}
        {...(props as StyledInputProps)}
      />
      {icon && (
        <StyledIconContainer
          onClick={onIconClick}
          background="background"
          flex={false}
          align="center"
          justify="center"
        >
          <Icon size="xsm-medium" icon={icon} color="secondary" />
        </StyledIconContainer>
      )}
    </Flex>
  )
}

Input.displayName = 'Input'

Input.defaultProps = {
  variant: 'default',
  inputSize: 'default',
}

export type InputProps = Props
