import React from 'react'
import "./socialMedia.css"

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
        <div className="socialBox">
            <i className='fab fa-facebook'></i>
            <span>12,740 Likes</span>
        </div>
        <div className="socialBox">
            <i className='fab fa-twitter'></i>
            <span>1,740 Fallowers</span>
        </div>
        <div className="socialBox">
            <i className='fab fa-pinterest'></i>
            <span>790 Fans</span>
        </div>
        <div className="socialBox">
            <i className='fab fa-instagram'></i>
            <span>500 Fans</span>
        </div>
        <div className="socialBox">
            <i className='fab fa-youTube'></i>
            <span>500 Subscribers</span>
        </div>

      </section>
    </>
  )
}

export default SocialMedia
