import React from 'react'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import linkedin from './icons/linkedin.svg'
import snapchat from './icons/snapchat.svg'
import tiktok from './icons/tiktok.svg'
import twitter from './icons/twitter.svg'
import youtube from './icons/youtube.svg'
import * as styles from './socialMedia.module.scss'

const getSvg = (icon) => {
  switch (icon) {
    case 'Facebook':
      return facebook
    case 'Instagram':
      return instagram
    case 'Linkedin':
      return linkedin
    case 'Snapchat':
      return snapchat
    case 'Tiktok':
      return tiktok
    case 'Twitter':
      return twitter
    case 'Youtube':
      return youtube
    default:
      break
  }
}
const SocialMedia = ({ icon }) => (
  <a href={icon.url} aria-label={icon.alt} className={styles.base}>
    <img alt={icon.name} className={styles.icon} src={getSvg(icon.icon)} />
  </a>
)

export default SocialMedia
