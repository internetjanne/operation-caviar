import React from 'react'
import classnames from 'classnames'
import * as styles from './section.module.scss'

const Section = ({ children, black, blackFade, z }) => (
  <section
    style={{ zIndex: z }}
    className={classnames(styles.base, {
      [styles.black]: black,
      [styles.blackFade]: blackFade,
    })}
  >
    {children}
  </section>
)

export default Section
