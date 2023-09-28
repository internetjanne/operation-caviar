import React from 'react'
import cn from 'classnames'
import * as styles from './grid.module.scss'

const Grid = ({ children, columns = 2, desktopColumns, gg = 'md' }) => {
  return (
    <div
      className={cn('grid', styles.base, {
        [styles.xs]: gg === 'xs',
        [styles.sm]: gg === 'sm',
        [styles.md]: gg === 'md',
        [styles.lg]: gg === 'lg',
        [styles.xl]: gg === 'xl',
        [styles.threeCols]: columns === 3,
        [styles.twoCols]: columns === 2,
        [styles.desktopColsAuto]: desktopColumns === 'auto'
      })}
    >
      {children}
    </div>
  )
}

export default Grid
