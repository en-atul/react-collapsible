import {ReactNode} from 'react'

export interface ItemProps {
  key: number
  title: string
  content: string | ReactNode
}
export interface CollapsibleProps {
  items: ItemProps[]
  wrapperClassName?: string
  itemClassName?: string
  itemTitleClassName?: string
  itemContentClassName?: string
}
export interface CollapsibleItemProps {
  item: ItemProps
  activeKey: number
  setKey: React.Dispatch<React.SetStateAction<number>>
  itemTitleClassName?: string
  itemContentClassName?: string
  iconActiveColor?: string
  iconInActiveColor?: string
}
