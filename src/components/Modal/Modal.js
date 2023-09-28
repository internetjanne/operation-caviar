import React from 'react'
import cn from 'classnames'
import * as styles from './modal.module.scss'
import Button from '~components/Button/Button'
import Space from '~components/Space/Space'
import Container from '~components/Container/Container'

const Modal = ({ isActive, children, handleModal, buttonText = 'Close' }) => (
  <div className={cn(styles.base, { [styles.isActive]: isActive })}>
    <div
      onClick={handleModal}
      className={cn(styles.overlay, { [styles.isActive]: isActive })}
    />
    {isActive && (
      <div className={styles.modal}>
        <div onClick={handleModal} className={styles.close}>
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.4519 10.4999L21.6888 1.7249L20.3113 0.274902L11 9.12059L1.68878 0.274902L0.311279 1.7249L9.54812 10.4999L0.311279 19.2749L1.68878 20.7249L11 11.8792L20.3113 20.7249L21.6888 19.2749L12.4519 10.4999Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.inner}>
          <Container>
            {children}
            <Space t={4} b={4}>
              <Button onClick={handleModal} block="small" alignCenter secondary>
                {buttonText}
              </Button>
            </Space>
          </Container>
        </div>
      </div>
    )}
  </div>
)

export default Modal
