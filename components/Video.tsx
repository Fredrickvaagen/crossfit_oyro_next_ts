import React from 'react'

function Video() {
  return (
    <video
      preload="/theMurph.mp4"
      style={{
        width: '480px',
        height: 'auto',
        borderRadius: '8px',
        filter: 'grayscale(100%)',
        marginTop: '1rem',
      }}
      autoPlay
      muted
      loop
    >
      <source src="/theMurph.mp4" />
    </video>
  )
}

export default Video
