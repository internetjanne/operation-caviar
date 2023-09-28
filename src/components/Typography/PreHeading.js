import React from 'react'
import classnames from 'classnames'
import * as styles from './preHeading.module.scss'

const PreHeading = ({ className, children }) => (
  <span className={classnames('pre-heading', styles.base, className)}>
    {children}
  </span>
)

export default PreHeading
