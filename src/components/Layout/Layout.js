import React, { useEffect, useState } from 'react'
import '../base.css'
import * as styles from './layout.module.scss'

const Layout = ({ children, description = 'Get on board the Abba Voyage' }) => {
  const [showCookieBar, handleShowCookieBar] = useState(false)

  const cookieClick = (value) => {
    window.sessionStorage.setItem('cookieconsent', value)
    handleShowCookieBar(false)
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('cookieconsent') === null) {
      handleShowCookieBar(true)
    }
  }, [showCookieBar])

  //todo: fix proper head-title per page
  return (
    <>
      <main className={styles.base}>
        <div className={styles.inner}>{children}</div>
      </main>
    </>
  )
}

export default Layout
