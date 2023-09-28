import React from 'react'
import classnames from 'classnames'
import * as styles from './paragraph.module.scss'

const Paragraph = ({ className, children }) => (
  <p className={classnames(styles.base, className)}>{children}</p>
)

export default Paragraph
