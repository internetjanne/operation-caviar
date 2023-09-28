import React from 'react'
import * as styles from './directions.module.scss'
import Heading from '~components/Typography/Heading'
import PreHeading from '~components/Typography/PreHeading'
import Button from '~components/Button/Button'
import Logo from '~components/Logo/Logo'
import TextContent from '~components/TextContent/TextContent'
import Container from '~components/Container/Container'

const Directions = ({ preHeading, heading, address, button }) => {
  return (
    <section className={styles.base}>
      <div className={styles.map}>
        <Container>
          <div className={styles.header}>
            <TextContent>
              {!!preHeading && (
                <PreHeading>{preHeading}</PreHeading>
              )}
              {!!heading && (
                <Heading>{heading}</Heading>
              )}
            </TextContent>
          </div>
        </Container>
        <div className={styles.marker}>
          <Logo className={styles.logo} />
          {!!address && (
            <small>{address}</small>
          )}
        </div>
        {!!button && (
        <div className={styles.button}>
          <Button
            alignCenter
            target={button.targetBlank ? "_blank" : "_self"}
            link={button.link.link}
            secondary={button.buttonStyle === "Secondary"}
          >
            {button.label}
          </Button>
        </div>
        )}
      </div>
    </section>
  )
}

export default Directions
