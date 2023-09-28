import React, { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'

const Anim = ({ animationData, playsForward, autoplay, loop }) => {
  const defaultOptions = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const lottieRef = useRef()

  useEffect(() => {
    lottieRef.current.setDirection(playsForward ? 1 : -1)
    lottieRef.current.play()
  }, [playsForward])

  return (
    <Lottie
      {...defaultOptions}
      style={{ lineHeight: '0' }}
      lottieRef={lottieRef}
      animationData={animationData}
    />
  )
}

Anim.defaultProps = {
  autoplay: false,
  loop: false,
  playsForward: true,
}

export default Anim
