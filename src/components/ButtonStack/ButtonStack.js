import React from 'react'
import * as styles from './buttonStack.module.scss'
import TextContent from '~components/TextContent/TextContent'

const ButtonStack = ({ children }) => (
  <div className={styles.base}>
    <TextContent>{children}</TextContent>
  </div>
)

export default ButtonStack
