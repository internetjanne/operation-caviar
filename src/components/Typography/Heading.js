import React from 'react'
import classnames from 'classnames'
import * as styles from './heading.module.scss'

const Tag = ({ type, children, ...rest }) => {
  switch (type) {
    case 'h1':
      return <h1 {...rest}>{children}</h1>
    case 'h2':
      return <h2 {...rest}>{children}</h2>
    case 'h3':
      return <h3 {...rest}>{children}</h3>
    case 'h4':
      return <h4 {...rest}>{children}</h4>
    case 'h5':
      return <h5 {...rest}>{children}</h5>
    case 'h6':
      return <h6 {...rest}>{children}</h6>
    default:
      return <span>ooops</span>
  }
}

const Heading = ({ type = 'h2', noMargin, children, className }) => (
  <Tag
    type={type}
    className={classnames(styles.base, className, {
      [styles.noMargin]: noMargin,
    })}
  >
    {children}
  </Tag>
)

export default Heading
