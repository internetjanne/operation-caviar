import React from 'react'
import './textContent.module.scss'
import classnames from 'classnames'

const TextContent = ({ children, inverted }) => (
  <div className={classnames('content', { inverted: inverted })}>
    {children}
  </div>
)

export default TextContent
