import React from 'react'
import "./styles/notfound.css"

const NotFound = () => {
  return (
    <div className='not-found-wrapper'>
      <div className="not-found-hero">
        <div className="not-found-text">
          <h1>
            Page not found!
          </h1>
          <h4>
            It may still be under construction or not exist.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default NotFound