import React from 'react'

function Logo({color}) {
  return (
    <div className={`logo`}>
      <span className={`logo__one ${color}`}> moz </span>
      <span className={`logo__two ${color}`}> template </span>
    </div>
  )
}

export default Logo