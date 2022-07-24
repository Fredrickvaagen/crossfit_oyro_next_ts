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
        marginTop: '0',
      }}
      muted={true}
      loop={true}
      autoPlay={true}
    >
      <source src="/theMurph.webm" />
    </video>
  )
}

export default Video
