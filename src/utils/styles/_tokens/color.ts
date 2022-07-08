export type TColorTokenEnum =
  | 'none'
  | 'primary'
  | 'dark-primary'
  | 'secondary'
  | 'heading'
  | 'text'
  | 'dark-text'
  | 'light-text'
  | 'border'
  | 'background'
  | 'dark-background'
  | 'light-background'
  | 'btn-primary'
  | 'btn-secondary'
  | 'link-primary'
  | 'link-secondary'
  | 'light-secondary'

export const COLOR_TO_VALUE: { [key in TColorTokenEnum]: string } = {
  'none': 'transparent',
  'primary': '#586E94',
  'dark-primary': '#155F13',
  'secondary': '#2586FA',
  'light-secondary': '#eceaff',
  'heading': '#292929',
  'text': '#757575',
  'dark-text': '#000',
  'light-text': '#FFFFFF',
  'border': '#E6E6E6',
  'background': '#0D1D38',
  'dark-background': '#000000',
  'light-background': '#F2F2F2',
  'btn-primary': '#f18701',
  'btn-secondary': '#F2F2F2',
  'link-primary': '#292929',
  'link-secondary': '#1A8917',
}

export const color = COLOR_TO_VALUE
