import classNames from 'classnames'
import React, {FC, ReactNode, useEffect, useRef, useState} from 'react'

import './collapsible.css'

export interface DataProps {
  key: number
  title: string
  content: string | ReactNode
}
export interface CollapsibleProps {
  data: DataProps[]
}
export interface CollapsibleItemProps {
  item: DataProps
  activeKey: number
  setKey: React.Dispatch<React.SetStateAction<number>>
}

const CollapsibleItem: FC<CollapsibleItemProps> = ({
  item,
  activeKey,
  setKey,
}) => {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const clientHeight = (contentRef?.current as any).clientHeight || undefined
    if (clientHeight) setHeight(clientHeight)
  }, [])

  const isOpen = activeKey === item.key
  return (
    <>
      <button
        className="item-title"
        onClick={() => {
          if (isOpen) setKey(0)
          else setKey(item.key)
        }}
      >
        <p>{item.title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classNames('chevron', {
            'chevron-active': isOpen,
          })}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className="item-content"
        style={{
          maxHeight: isOpen ? height : 0,
          transition: `${height}px 0.2s ease-out`,
          overflow: 'auto',
          padding: isOpen ? '0.7rem 0.7rem' : '0 0.7rem',
        }}
      >
        <div ref={contentRef}>{item.content}</div>
      </div>
    </>
  )
}

const Collapsible: FC<CollapsibleProps> = ({data}) => {
  const [activeKey, setKey] = useState(0)

  return (
    <section className="collapsible-wrapper">
      {data?.map((item, idx) => (
        <article key={idx} className="item">
          <CollapsibleItem item={item} activeKey={activeKey} setKey={setKey} />
        </article>
      ))}
    </section>
  )
}

export default Collapsible
