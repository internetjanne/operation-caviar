import React from 'react'
import * as styles from './checkbox.module.scss'
import classnames from 'classnames'

const Checkbox = ({ name, children, attrs }) => (
  <label
    className={classnames(styles.checkboxWrapper, {
      [styles.checked]: attrs.checked,
      [styles.disabled]: attrs.disabled,
    })}
  >
    <input type="checkbox" name={name} className={styles.checkbox} {...attrs} />
    <div className={styles.box}>
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
    <span>{children}</span>
  </label>
)

export default Checkbox
