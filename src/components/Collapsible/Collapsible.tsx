import classNames from 'classnames'
import {CollapsibleItemProps, CollapsibleProps} from 'interfaces'
import React, {FC, useEffect, useRef, useState} from 'react'

import {ChevronRightIcon} from '../SvgIcons'
import './collapsible.css'

const CollapsibleItem: FC<CollapsibleItemProps> = ({
  item,
  activeKey,
  setKey,
  itemTitleClassName,
  itemContentClassName,
  iconActiveColor,
  iconInActiveColor,
  icon,
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
        className={`item-title ${itemTitleClassName}`}
        onClick={() => {
          if (isOpen) setKey(undefined)
          else setKey(item.key)
        }}
      >
        <p>{item.title}</p>
        {icon ? (
          icon(isOpen)
        ) : (
          <ChevronRightIcon
            classes={classNames('chevron', {
              'chevron-active': isOpen,
            })}
            fillColor={isOpen ? iconActiveColor : iconInActiveColor}
          />
        )}
      </button>
      <div
        className={`item-content ${itemContentClassName}`}
        style={{
          maxHeight: isOpen ? height : 0,
          transition: `${height}px 0.2s ease-out`,
          overflow: 'clip',
          padding: isOpen ? '0.7rem 0.7rem' : '0 0.7rem',
        }}
      >
        <div ref={contentRef}>{item.content}</div>
      </div>
    </>
  )
}

const Collapsible: FC<CollapsibleProps> = ({
  items,
  wrapperClassName,
  itemClassName,
  ...rest
}) => {
  const [activeKey, setKey] = useState<undefined | number>()

  return (
    <section className={`wrapper ${wrapperClassName}`}>
      {items?.map((item, idx) => {
        const props = {
          item,
          activeKey,
          setKey,
          ...rest,
        }

        return (
          <article key={idx} className={`item ${itemClassName}`}>
            <CollapsibleItem {...props} />
          </article>
        )
      })}
    </section>
  )
}

export default Collapsible
