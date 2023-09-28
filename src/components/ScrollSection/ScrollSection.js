import React, { useLayoutEffect, useEffect, useState, useMemo } from 'react'
import classnames from 'classnames'
import scroll from './scroll.json'
import Anim from '~components/Anim/Anim'
import * as styles from './scrollSection.module.scss'

const ScrollSectionWrapper = (props) => {
  // A Wrapper to stop useLayoutEffect render on server, and only render on client.

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return <ScrollSection {...props} />
}

const ScrollSection = ({
  children,
  length,
  scrolled,
  popContent,
  progress,
}) => {
  const [isIphone, setIsIphone] = useState(undefined)

  useLayoutEffect(() => {
    if (isIphone === undefined) {
      setIsIphone(window.innerHeight === 635 ? true : false)
    }
  }, [isIphone])

  const containerHeight = useMemo(
    () => (isIphone ? length * 749 + 'px' : length * 100 + 'vh'),
    [isIphone, length]
  )

  const innerHeight = useMemo(() => (isIphone ? '749px' : '100vh'), [isIphone])

  // callback inview
  return (
    <div className={styles.base} style={{ height: containerHeight }}>
      <div className={styles.inner} style={{ height: innerHeight }}>
        {popContent.map((item) => (
          <div
            key={item.point + item.distance + '-key'}
            className={classnames(styles.pop, {
              [styles.inview]:
                item.point > progress - item.distance &&
                item.point < progress + item.distance,
            })}
          >
            {item.html}
          </div>
        ))}
        {children}
      </div>
      <div
        className={classnames(styles.scrollHint, { [styles.hide]: scrolled })}
      >
        <Anim autoplay={true} loop={true} animationData={scroll} />
      </div>
    </div>
  )
}

ScrollSection.defaultProps = {
  scrolled: false,
}

export default ScrollSectionWrapper
