import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import Heading from '~components/Typography/Heading'
import PreHeading from '~components/Typography/PreHeading'
import TextContent from '~components/TextContent/TextContent'
import RichContent from '~components/RichContent/RichContent'
import * as styles from './inspirationalBlock.module.scss'

const InspirationalBlock = ({
  preHeading,
  heading,
  dangerhtml,
  content,
  image,
  isIchiban,
  isOdd = false,
}) => {
  const [isInView, setIsInView] = useState(false)
  const [animCooldown, setAnimCooldown] = useState(false)
  const wrapperRef = useRef(null)

  const onObs = (a) => {
    const inView = a[0].isIntersecting

    if (inView) {
      if (!animCooldown) {
        setIsInView(true)
        setAnimCooldown(true)
        setTimeout(() => {
          if (wrapperRef.current) {
            setAnimCooldown(false)
          }
        }, 10000)
      }
    } else {
      if (!animCooldown) {
        setIsInView(false)
      }
    }
  }

  useEffect(() => {
    const obs = new IntersectionObserver(onObs)

    if (wrapperRef.current) {
      obs.observe(wrapperRef.current)
    }
    return () => {
      if (wrapperRef.current) {
        obs.unobserve(wrapperRef.current)
      }
    }
  }, [wrapperRef, isInView, animCooldown])

  return (
    <div
      className={classnames(styles.base, {
        [styles.isOdd]: isOdd,
        [styles.isInView]: isInView,
      })}
    >
      <div className={styles.text} ref={wrapperRef}>
        <TextContent>
          {preHeading && <PreHeading>{preHeading}</PreHeading>}
          <Heading noMargin={!!preHeading} type={isIchiban ? 'h1' : 'h2'}>
            {heading}
          </Heading>
          {!!dangerhtml && (
            <div
              className={'dangerhtml'}
              dangerouslySetInnerHTML={{ __html: dangerhtml.body }}
            />
          )}
          {!!content && (
            <RichContent content={content} />
          )}
        </TextContent>
      </div>
      {image ? (
        <figure className={styles.imageWrapper}>
          <div className={styles.image}>
            <div className={styles.clip}>
              <img src={image.file.url} alt={image.description} />
            </div>
          </div>
          {/* image.title && <figcaption>{image.title}</figcaption> */}
        </figure>
      ) : (
        <div className={styles.noImage}></div>
      )}
    </div>
  )
}

export default InspirationalBlock
