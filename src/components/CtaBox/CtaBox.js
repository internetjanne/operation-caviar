import React from 'react'
import Button from '~components/Button/Button'
import Heading from '~components/Typography/Heading'
import * as styles from './ctabox.module.scss'
import TextContent from '~components/TextContent/TextContent'

const CtaBox = ({ heading, content, link }) => (
  <div className={styles.base}>
    <TextContent>
      <Heading>{heading}</Heading>
      <p className={styles.content}>{content}</p>
      <Button alignCenter secondary link={link.slug}>
        {link.name}
      </Button>
    </TextContent>
  </div>
)

export default CtaBox
