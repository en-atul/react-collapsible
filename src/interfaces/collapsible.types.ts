import {ReactNode} from 'react'

export interface ItemProps {
  key: number
  title: string
  content: ReactNode
}

export interface CollapsibleItemProps {
  item: ItemProps
  activeKey: number | undefined
  setKey: React.Dispatch<React.SetStateAction<number | undefined>>
  itemTitleClassName?: string
  itemContentClassName?: string
  iconActiveColor?: string
  iconInActiveColor?: string
  icon?: (isOpen: boolean) => ReactNode
}

export interface CollapsibleProps {
  items: ItemProps[]
  wrapperClassName?: string
  itemClassName?: string
  itemTitleClassName?: string
  itemContentClassName?: string
  iconActiveColor?: string
  iconInActiveColor?: string
  icon?: (isOpen: boolean) => ReactNode
}
