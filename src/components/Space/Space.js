import React from 'react'
import classnames from 'classnames'
import * as styles from './space.module.scss'

const Space = ({ children, t, b, tLarge, bLarge }) => (
  <div
    className={classnames(
      styles.base,
      [styles['t' + t]],
      [styles['b' + b]],
      [styles['tLarge' + tLarge]],
      [styles['bLarge' + bLarge]]
    )}
  >
    {children ? children : 'BAD SPACER'}
  </div>
)

export default Space
