import React from 'react'

function GoogleMapIFrame() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3967.451926325369!2d5.470876!3d60.185268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463c5f3202b81cd7%3A0x8b78008dbdfe829e!2sBrugata%2011%2C%205200%20Os!5e0!3m2!1sen!2sno!4v1658330173174!5m2!1sen!2sno"
      width="100%"
      height="100%"
      frameBorder="0"
      style={{
        border: 0,
        padding: '3rem',
        borderRadius: '8px',
        minHeight: '400px',
      }}
      allowFullScreen={true}
      aria-hidden="false"
      tabIndex={0}
    />
  )
}

export default GoogleMapIFrame
