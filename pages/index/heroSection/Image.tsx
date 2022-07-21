import Image from 'next/image'
import React from 'react'
const myLoader = () => {
  return `/background.jpg`
}

export default function MyImage() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Image
        loader={myLoader}
        src="/background.jpg"
        alt="hero"
        width={500}
        height={700}
        style={{
          borderRadius: '8px',
          filter: 'grayscale(100%)',
        }}
        priority
      />
    </div>
  )
}
