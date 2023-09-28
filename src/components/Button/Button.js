import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import * as styles from './button.module.scss'

const ButtonElement = ({ to, children, target, ...rest }) =>
  !to ? (
    <button {...rest}>{children}</button>
  ) : /^\/(?!\/)/.test(to) ? (
    <Link to={`${to}`} {...rest}>
      {children}
    </Link>
  ) : (
    <a target={target} href={to} {...rest}>
      {children}
    </a>
  )

const Button = ({
  secondary,
  children,
  link,
  block,
  alignCenter,
  pullLeftDesktop,
  alignRight,
  disabled,
  onClick,
  loading,
  back,
  target,
  buttonStyle = 'Primary',
}) => {
  const [isInView, setIsInView] = useState(false)
  const wrapperRef = useRef(null)

  const isSecondary = buttonStyle === 'Secondary' || secondary

  const wrapperStyles = classnames(styles.wrapper, 'button', {
    [styles.alignCenter]: alignCenter,
    [styles.alignRight]: alignRight,
    [styles.pullLeftDesktop]: pullLeftDesktop,
    [styles.wrapperBlock]: block && typeof block === 'boolean',
  })

  const buttonStyles = classnames(styles.base, {
    [styles.block]: block && typeof block === 'boolean',
    [styles.blockSmallOnly]: typeof block === 'string' && block === 'small',
    [styles.loading]: loading,
    [styles.back]: back,
    [styles.disabled]: disabled,
    [styles.secondary]: isSecondary,
    secondary: isSecondary,
  })

  const onObs = (a) => {
    if (isInView !== a[0].isIntersecting) {
      setIsInView(a[0].isIntersecting)
    }
  }

  useEffect(() => {
    const obs = new IntersectionObserver(onObs)

    if (wrapperRef.current) {
      obs.observe(wrapperRef.current)
    }
    return () => {
      if (wrapperRef.current) {
        obs.unobserve(wrapperRef.current)
      }
    }
  }, [wrapperRef])

  return (
    <div className={wrapperStyles}>
      <ButtonElement
        target={target}
        onClick={onClick}
        to={link}
        className={buttonStyles}
      >
        <span
          className={classnames(styles.plate, 'plate')}
          role="presentation"
        />
        {!isSecondary && (
          <span
            ref={wrapperRef}
            role="presentation"
            className={classnames(styles.glowWrapper, 'glow', {
              [styles.inView]: isInView,
            })}
          >
            {!secondary && !disabled && <span className={styles.glow} />}
          </span>
        )}
        <span className={styles.label}>{children}</span>
      </ButtonElement>
    </div>
  )
}

export default Button
