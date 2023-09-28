import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Logo from '~components/Logo/Logo'
import Nav from '~components/Nav/Nav'
import Anim from '~components/Anim/Anim'
import burger from './burger.json'
import * as styles from './header.module.scss'
import classnames from 'classnames'

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [hideTicketButton, setHideTicketButton] = React.useState(false)
  const [isInView, setIsInView] = useState(false)
  const [wasInView, setWasInView] = useState(false)

  const setAlwaysShowTicketButton = () => {
    window.sessionStorage.setItem('alwaysShowTicketButton', 'true')
  }
  const onObs = (a) => {
    const intersecting = a[0].isIntersecting
    if (isInView !== intersecting) {
      setIsInView(intersecting)
    }
    if (isInView && !intersecting) {
      setWasInView(true)
      setAlwaysShowTicketButton()
    }
  }

  useEffect(() => {
    const obs = new IntersectionObserver(onObs)

    const element = document.querySelector(
      '.hide-ticket-button-until-scrolled-past-this'
    )

    const alwaysHideTicketButton = window.sessionStorage.getItem(
      'alwaysShowTicketButton'
    )

    if (element && !alwaysHideTicketButton) {
      setHideTicketButton(true)
    } else {
      setAlwaysShowTicketButton()
    }

    if (element) {
      obs.observe(element)
    }
    return () => {
      if (element) {
        obs.unobserve(element)
      }
    }
  })

  return (
    <>
      <header className={styles.base}>
        <div className={styles.inner}>
          <Link aria-label="Navigate to start page" to="/">
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.buttons}>
            <div
              className={classnames(styles.buttonWrapper, styles.ticketButton, {
                [styles.active]: wasInView,
                [styles.hidden]: hideTicketButton,
              })}
            >
              <a to="https://www.ticketmaster.com/">
                <button
                  aria-label="Get tickets"
                  className={classnames(styles.button)}
                >
                  <svg viewBox="0 0 47 26">
                    <title>Ticket icon</title>
                    <path
                      d="M7.95959 4.75928C7.95959 4.48314 8.18345 4.25928 8.45959 4.25928C8.73574 4.25928 8.95959 4.48314 8.95959 4.75928V8.75928C8.95959 9.03542 8.73574 9.25928 8.45959 9.25928C8.18345 9.25928 7.95959 9.03542 7.95959 8.75928V4.75928Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.45959 10.2593C8.18345 10.2593 7.95959 10.4831 7.95959 10.7593V14.7593C7.95959 15.0354 8.18345 15.2593 8.45959 15.2593C8.73574 15.2593 8.95959 15.0354 8.95959 14.7593V10.7593C8.95959 10.4831 8.73574 10.2593 8.45959 10.2593Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.95959 16.7593C7.95959 16.4831 8.18345 16.2593 8.45959 16.2593C8.73574 16.2593 8.95959 16.4831 8.95959 16.7593V20.7593C8.95959 21.0354 8.73574 21.2593 8.45959 21.2593C8.18345 21.2593 7.95959 21.0354 7.95959 20.7593V16.7593Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.2962 14.6492C21.9472 14.6492 22.2062 14.1382 22.3112 13.5782L23.3472 13.7112C23.1792 14.8312 22.4302 15.5102 21.2962 15.5102C19.7422 15.5102 19.0492 14.0752 19.0492 12.7032C19.0492 11.3312 19.7422 9.89624 21.2962 9.89624C22.4162 9.89624 23.1652 10.5402 23.3472 11.6952L22.3112 11.8352C22.2062 11.2682 21.9542 10.7572 21.2962 10.7572C20.3582 10.7572 20.1692 12.0032 20.1692 12.7032C20.1692 13.4032 20.3582 14.6492 21.2962 14.6492Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.8801 9.98024H12.9601V10.9042H14.3741V15.4262H15.4661V10.9042H16.8801V9.98024Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.4004 15.4262V9.98024H17.3084V15.4262H18.4004Z"
                      fill="currentColor"
                    />
                    <path
                      d="M25.0928 12.2552V9.98024H24.0008V15.4262H25.0928V13.7882L25.6598 13.0672L26.9758 15.4262H28.2218L26.3948 12.1082L28.0188 9.98024H26.7588L25.0928 12.2552Z"
                      fill="currentColor"
                    />
                    <path
                      d="M28.6561 9.98024H32.0441V10.9042H29.7481V12.2062H31.6521V13.1302H29.7481V14.5022H32.1771V15.4262H28.6561V9.98024Z"
                      fill="currentColor"
                    />
                    <path
                      d="M36.4514 9.98024H32.5314V10.9042H33.9454V15.4262H35.0374V10.9042H36.4514V9.98024Z"
                      fill="currentColor"
                    />
                    <path
                      d="M38.6997 9.89624C39.6237 9.89624 40.3167 10.4912 40.4077 11.4082L39.4207 11.5832C39.3157 11.2052 39.1057 10.8202 38.6647 10.8202C38.3077 10.8202 37.9997 11.0792 37.9997 11.4502C37.9997 11.9009 38.4533 12.038 38.9787 12.1968C39.7021 12.4155 40.5617 12.6754 40.5617 13.8512C40.5617 14.5162 40.0577 15.5102 38.7137 15.5102C37.6777 15.5102 36.9287 15.0062 36.7607 13.9422L37.8527 13.7812C37.9507 14.2432 38.1887 14.5862 38.7067 14.5862C39.1337 14.5862 39.4907 14.3622 39.4907 13.8932C39.4907 13.4191 39.0078 13.2696 38.4613 13.1004C37.7491 12.8799 36.9287 12.6259 36.9287 11.5762C36.9287 10.5962 37.7547 9.89624 38.6997 9.89624Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.959595 22.1343L2.17697 21.5256C2.65661 21.2858 2.95959 20.7955 2.95959 20.2593C2.95959 19.723 2.65661 19.2328 2.17697 18.993L0.959595 18.3843V14.6343L2.25494 13.938C2.68889 13.7048 2.95959 13.252 2.95959 12.7593C2.95959 12.2666 2.68889 11.8138 2.25494 11.5805L0.959595 10.8843V7.13428L2.17697 6.52559C2.65661 6.28577 2.95959 5.79554 2.95959 5.25928C2.95959 4.72302 2.65661 4.23279 2.17697 3.99297L0.959595 3.38428V0.259277H44.9596C46.0642 0.259277 46.9596 1.15471 46.9596 2.25928V23.2593C46.9596 24.3638 46.0642 25.2593 44.9596 25.2593H0.959595V22.1343ZM3.1771 2.25928C4.27294 2.85568 4.95959 4.00532 4.95959 5.25928C4.95959 6.55308 4.22861 7.73584 3.0714 8.31444L2.95959 8.37035V9.68868L3.20182 9.81887C4.28433 10.4007 4.95959 11.5303 4.95959 12.7593C4.95959 13.9882 4.28433 15.1178 3.20182 15.6997L2.95959 15.8299V17.1482L3.0714 17.2041C4.22861 17.7827 4.95959 18.9655 4.95959 20.2593C4.95959 21.5132 4.27294 22.6629 3.1771 23.2593H44.9596V2.25928H3.1771Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </a>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                aria-label="Toggle Menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                className={classnames(styles.button, styles.burger)}
              >
                <Anim playsForward={menuOpen} animationData={burger} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.spacer} />
      <Nav open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
    </>
  )
}

export default Header
