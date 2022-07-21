import React from 'react'

function Video() {
  return (
    <video
      controls
      playsInline
      style={{
        width: '480px',
        height: 'auto',
        borderRadius: '8px',
        filter: 'grayscale(100%)',
        marginTop: '1rem',
      }}
      muted={true}
      loop={true}
      autoPlay={true}
    >
      <source src="/theMurph.mp4" />
    </video>
  )
}

export default Video
