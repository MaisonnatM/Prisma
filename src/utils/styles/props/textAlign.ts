import { CSSObject } from '@emotion/react'

export enum TextAlignEnum {
  'start' = 'start',
  'center' = 'center',
  'end' = 'end',
  'justify' = 'justify',
}

export type TextAlignType = {
  textAlign: keyof typeof TextAlignEnum
}

export const getTextAlignStyles = (textAlign: TextAlignType['textAlign']): CSSObject => {
  return {
    textAlign: TextAlignEnum[textAlign],
  }
}
