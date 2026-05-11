'use client'

import Lottie from 'lottie-react'

type Props = {
  animationData: unknown
  className?: string
}

export default function LottieAnimation({ animationData, className }: Props) {
  return <Lottie animationData={animationData} loop autoplay className={className} />
}
