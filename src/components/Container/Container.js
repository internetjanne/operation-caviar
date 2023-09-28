import React from 'react'
import cn from 'classnames'
import { base, centered } from './container.module.scss'

const Container = ({ children, center = false, z }) => (
  <div style={{ zIndex: z }} className={cn(base, { [centered]: center })}>
    {children}
  </div>
)

export default Container
