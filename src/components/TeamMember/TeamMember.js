import React from 'react'
import cn from 'classnames'
import * as styles from './teamMember.module.scss'

const TeamMember = ({ image, name, jobTitle, handleClick }) => (
  <div
    onClick={handleClick}
    className={cn(styles.base, {
      [styles.clickable]: !!handleClick,
    })}
  >
    <figure className={styles.imageWrapper}>
      <img
        className={styles.image}
        src={image.file.url}
        alt={image.description}
      ></img>
    </figure>
    <p className={styles.name}>{name}</p>
    <p className={styles.title}>{jobTitle}</p>
  </div>
)

export default TeamMember
