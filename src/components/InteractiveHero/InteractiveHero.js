import React, { useState, useEffect, useRef, useMemo } from 'react'
import PlayCanvasIframe from '~components/PlayCanvas/PlayCanvasIframe'
import ScrollSection from '~components/ScrollSection/ScrollSection'
import Tagline from './Tagline'
import * as styles from './interactiveHero.module.scss'

const InteractiveHero = ({ tagline1, tagline2, tagline3, tagline4 }) => {
  const [data, setData] = useState({})
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(false)
  const [touchDown, setTouchDown] = useState(false)

  const sectionRef = useRef()

  useEffect(() => {
    const section = sectionRef.current
    const update = () => {
      const rect = section.getBoundingClientRect()

      const v = 1 - (rect.height + rect.y) / rect.height + 0.011
      const progress = v + v * -0.15
      setData({ ...data, progress: progress, smoothness: 0.5 })
      setScrolled(progress > 0)
      setProgress(progress)
    }
    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)

    const tm = (e) => {
      const x = e.changedTouches[0].clientX
      const y = e.changedTouches[0].clientY
      setData({
        ...data,
        part: {
          x: x,
          y: y,
        },
      })
    }

    const ts = (e) => {
      const x = e.changedTouches[0].clientX
      const y = e.changedTouches[0].clientY
      setData({
        ...data,
        part: {
          x: x,
          y: y,
        },
      })
      setTouchDown(true)
    }

    const te = () => {
      setTouchDown(false)
    }

    window.addEventListener('touchstart', ts)
    window.addEventListener('touchmove', tm)
    window.addEventListener('touchend', te)
    // window.addEventListener('mousemove', mm)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)

      window.removeEventListener('touchmove', tm)
      window.removeEventListener('touchstart', ts)
      window.removeEventListener('touchend', te)
    }
  }, [data, scrolled, progress])

  const opacity = useMemo(() => {
    const scrollProgress = 1 - progress * 20 + 16

    return scrollProgress > 1 ? 1 : scrollProgress < 0 ? 0 : scrollProgress
  }, [progress])

  return (
    <section
      ref={sectionRef}
      className={styles.base}
      style={{ opacity: opacity }}
    >
      <ScrollSection
        length={6}
        scrolled={scrolled}
        progress={progress}
        popContent={[
          {
            html: tagline1 && (
              <Tagline className={styles.tagline1} content={tagline1} />
            ),
            point: 0.22,
            distance: 0.02,
          },
          {
            html: tagline2 && (
              <Tagline className={styles.tagline2} content={tagline2} />
            ),
            point: 0.39,
            distance: 0.02,
          },
          {
            html: tagline3 && (
              <Tagline className={styles.tagline3} content={tagline3} />
            ),
            point: 0.52,
            distance: 0.02,
          },
          {
            html: tagline4 && (
              <Tagline className={styles.tagline4} content={tagline4} />
            ),
            point: 0.68,
            distance: 0.02,
          },
        ]}
      >
        <PlayCanvasIframe
          touchDown={touchDown}
          data={data}
          style={{
            display: opacity === 0 ? 'none' : 'block',
            height: '100%',
            width: '100%',
          }}
          src="/tlp10/index.html"
        />
      </ScrollSection>
    </section>
  )
}

export default InteractiveHero
