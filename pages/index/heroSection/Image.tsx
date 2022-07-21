import Image from 'next/image'
import React from 'react'
const myLoader = () => {
  return `/background.jpg`
}

export const MyImage = () => {
  return (
    <Image
      loader={myLoader}
      src="/background.jpg"
      alt="hero"
      width={500}
      height={700}
      style={{
        borderRadius: '8px',
        filter: 'grayscale(100%)',
        marginTop: '2rem',
      }}
      priority
    />
  )
}
