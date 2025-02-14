import type { Props as ReactSelectProps } from 'react-select'

export type ICustomTimezone = {
  [key: string]: string
}

export type ILabelStyle = 'original' | 'altName' | 'abbrev'

export interface ITimezoneOption {
  value: string
  label: string
  abbrev?: string
  altName?: string
  offset?: number
}

export type ITimezone = ITimezoneOption | string

export interface Props
  extends Omit<ReactSelectProps<ITimezone, false>, 'onChange'> {
  value: ITimezone
  labelStyle?: ILabelStyle
  onChange?: (timezone: ITimezoneOption) => void
  timezones?: ICustomTimezone
}
