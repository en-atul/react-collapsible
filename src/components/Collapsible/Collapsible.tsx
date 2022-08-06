import React, {FC} from 'react'

export interface Props {
  label: string
}

const Collapsible: FC<Props> = ({label}) => {
  return <div>Collapsible: {label}</div>
}
export default Collapsible
