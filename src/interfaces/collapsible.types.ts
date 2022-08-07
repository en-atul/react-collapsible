import {CSSProperties, ReactNode} from 'react'

export interface ItemProps {
  key: number
  title: string
  content: ReactNode
}

export interface StyleProps {
  itemTitleClassName?: string
  itemTitleStyle?: CSSProperties
  itemContentClassName?: string
  itemContentStyle?: CSSProperties
  icon?: (isOpen: boolean) => ReactNode
  iconStyle?: {
    activeColor: string
    inactiveColor: string
    width: number
    height: number
  }
}

export interface CollapsibleItemProps extends StyleProps {
  item: ItemProps
  activeKey: number | undefined
  setKey: React.Dispatch<React.SetStateAction<number | undefined>>
}

export interface CollapsibleProps extends StyleProps {
  items: ItemProps[]
  wrapperClassName?: string
  wrapperStyle?: CSSProperties
  itemClassName?: string
  itemStyle?: CSSProperties
}
