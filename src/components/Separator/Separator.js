import React from 'react'
import classnames from 'classnames'
import * as styles from './separator.module.scss'

const Separator = ({ faded = false, reverse, z = -1 }) => (
  <div
    style={{ zIndex: z }}
    className={classnames('separator', styles.base, {
      [styles.hasFade]: faded,
      [styles.reverse]: reverse,
    })}
  />
)

export default Separator
