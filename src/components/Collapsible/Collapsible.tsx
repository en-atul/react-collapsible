import React, { FC } from 'react'


interface Props{
  label:string
}

 const Collapsible:FC<Props> =({label})=> {
  return (
    <div>Collapsible: {label}</div>
  )
}
export default Collapsible