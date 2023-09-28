import React from 'react'
import Container from '~components/Container/Container'
import * as styles from './hero.module.scss'

const Hero = ({ children, imgSrc }) => (
  <section
    className={styles.base}
    style={{
      backgroundImage: `url(${imgSrc})`,
    }}
  >
    <Container>{children}</Container>
  </section>
)

export default Hero
