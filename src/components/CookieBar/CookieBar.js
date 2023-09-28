import React from 'react'
import * as styles from './cookieBar.module.scss'
import Button from '../Button/Button'
import TextContent from '../TextContent/TextContent'
import classnames from 'classnames'

const CookieBar = ({ children, yes, no, onClick }) => {
  return (
    <div className={classnames(styles.base)}>
      <TextContent inverted>
        {children}
        <Button onClick={() => onClick(true)} block>
          {yes}
        </Button>
        <Button onClick={() => onClick(false)} block secondary>
          {no}
        </Button>
      </TextContent>
    </div>
  )
}

export default CookieBar
