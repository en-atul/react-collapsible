import React, {FC, useEffect, useRef, useState} from 'react'

import {useWindowSize} from '../../hooks'
import {CollapsibleItemProps, CollapsibleProps} from '../../interfaces'
import {ChevronRightIcon} from '../SvgIcons'
import './collapsible.css'

const CollapsibleItem: FC<CollapsibleItemProps> = props => {
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)
  const {windowSize} = useWindowSize()

  useEffect(() => {
    const clientHeight = (contentRef?.current as any).clientHeight || undefined
    if (clientHeight) setHeight(clientHeight)
  }, [windowSize, props, contentRef])

  const {
    item,
    activeKey,
    setKey,
    itemTitleClassName,
    itemContentClassName,
    itemTitleStyle,
    itemContentStyle,
    icon,
    iconStyle,
  } = props

  const isOpen = activeKey === item.key
  const ContentComponent = item.content as React.ElementType
  const TitleComponent = item.title as React.ElementType
  return (
    <>
      <button
        className={`item-title ${itemTitleClassName}`}
        onClick={() => {
          if (isOpen) setKey(undefined)
          else setKey(item.key)
        }}
        style={itemTitleStyle}
      >
        <p>
          {typeof item.title === 'string' ? item.title : <TitleComponent />}
        </p>
        {icon ? (
          icon(isOpen)
        ) : (
          <ChevronRightIcon
            classes={`chevron ${isOpen ? 'chevron-active' : ''}`}
            fillColor={
              isOpen ? iconStyle?.activeColor : iconStyle?.inactiveColor
            }
            width={iconStyle?.width}
            height={iconStyle?.height}
          />
        )}
      </button>
      <div
        className={`item-content ${itemContentClassName}`}
        style={{
          ...{
            maxHeight: isOpen ? height : 0,
            transition: `${height}px 0.2s ease-out`,
            overflow: 'clip',
            padding: isOpen ? '0.7rem 0.7rem' : '0 0.7rem',
          },
          ...itemContentStyle,
        }}
      >
        <div ref={contentRef}>
          {typeof item.content === 'string' ? (
            item.content
          ) : (
            <ContentComponent />
          )}
        </div>
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
    <section
      className={`wrapper ${wrapperClassName}`}
      style={rest.wrapperStyle}
    >
      {items?.map((item, idx) => {
        const props = {
          item,
          activeKey,
          setKey,
          ...rest,
        }

        return (
          <article
            key={idx}
            className={`item ${itemClassName}`}
            style={rest.itemStyle}
          >
            <CollapsibleItem {...props} />
          </article>
        )
      })}
    </section>
  )
}

export default Collapsible
