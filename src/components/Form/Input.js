import React from 'react'
import * as styles from './input.module.scss'
import classnames from 'classnames'

const Input = ({ label, name, isFlashing, valid, invalid, invalidText, attrs }) => (
  <>
    <label
      className={classnames(styles.label, {
        [styles.disabled]: attrs.disabled,
      })}
    >
      {label !== undefined && <span className={styles.text}>{label}</span>}
      <input className={styles.input} name={name} {...attrs} />
      <div className={styles.focus} />
      <span className={styles.clip}>
        <div
          className={classnames(styles.caret, {
            [styles.caretHidden]: !isFlashing,
          })}
        />
        <div
          className={classnames(styles.valid, {
            [styles.active]: valid && !invalid,
          })}
        >
          <div>
            <svg viewBox="0 0 15 14">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0805 3.04046L3.75344 13.7647L0.592529 5.18523L3.40755 4.1481L4.91335 8.23521L11.9196 0.959534L14.0805 3.04046Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div
          className={classnames(styles.invalid, { [styles.active]: invalid })}
        />
      </span>
    </label>
    {invalidText && (
      <div className={classnames(styles.invalidText, { [styles.isActive]: invalid })}>{invalidText}</div>
    )}
  </>
)

export default Input
