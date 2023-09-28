import React from 'react'
import cn from 'classnames'
import * as styles from './table.module.scss'

const Table = ({ data }) => {
  const [headings, ...cells] = data
  return (
    <div
      className={cn(styles.base, 'table', {
        [styles.threeCol]: headings.length === 3,
        [styles.twoCol]: headings.length === 2,
      })}
    >
      {
        (headings.map((heading, i) => (
          <div key={heading + i} className={styles.column__heading}>
            {heading}
          </div>
        )),
        cells.flat().map((cell, i) => (
          <div key={cell + i} className={styles.cell}>
            {cell}
          </div>
        )))
      }
    </div>
  )
}

export default Table
