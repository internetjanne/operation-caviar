import React, { useRef, useEffect, useState } from 'react'
import classnames from 'classnames'

const PlayCanvasIframe = ({ src, className, data, style, touchDown }) => {
  const iframeRef = useRef()
  const [active, setActive] = useState(false)

  const isValid = (item) => typeof item !== 'undefined'

  const updateIframeData = (data) => {
    if (isValid(iframeRef.current.contentWindow.pc)) {
      const current = iframeRef.current.contentWindow.pc.data

      iframeRef.current.contentWindow.pc.data = {
        ...current,
        ...data,
        part: {
          toggle: isValid(current.part) ? current.part.toggle : null,
          ...data.part,
        },
      }
    }
  }

  useEffect(() => {
    updateIframeData(data)
    if (typeof iframeRef.current.contentWindow.pc !== 'undefined') {
      if (typeof iframeRef.current.contentWindow.pc.data.part !== 'undefined') {
        if (touchDown && !active) {
          if (
            typeof iframeRef.current.contentWindow.pc.data.part.toggle ===
            'function'
          ) {
            iframeRef.current.contentWindow.pc.data.part.toggle(true)
            setActive(true)
          }
        } else if (!touchDown && active) {
          iframeRef.current.contentWindow.pc.data.part.toggle(false)
          setActive(false)
        }
      }
    }
  })

  return (
    <iframe
      title="Scrollable background ABBA animation"
      className={classnames('a3d-iframe', className)}
      style={{ pointerEvents: 'none', ...style }}
      frameBorder="0"
      ref={iframeRef}
      src={src}
    />
  )
}

PlayCanvasIframe.defaultProps = {
  className: undefined,
  style: { width: '100%' },
}

export default PlayCanvasIframe
