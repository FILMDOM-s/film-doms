type Color = 'default' | 'orange' | 'white' | 'black'

export interface BaseProps {
  color?: Color
  fill?: 'true' | 'false'
  clickable?: 'true' | 'false'
}

export type TagProps<T extends As> = OverRidableComponentProps<
  BaseProps &
    StrictPropsWithChildren & {
      as?: T
    },
  T
>
