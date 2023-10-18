import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
            <div className="box logo">
                <img src="../images/tech-logo-footer.png" alt="" />
                <p>Busan is an amazing Blogger them that is easy to customise for your needs</p>
                <i className='fa fa-envelope'></i>
                <span> a3199342@gmail.com</span><br/>
                <i className='fa fa-headphones'></i>
                <span>+918953486788</span>
            </div>
            <div className="box">
                <h3>SPORT</h3>
                <div className="item">
                    <img src="../images/hero/hero1.jpg" alt="" />
                    <p>Google to boost Android Security In Few days </p>
                </div>
                <div className="item">
                    <img src="../images/hero/hero2.jpg" alt="" />
                    <p>Cespedes play wining Baseball Game </p>
                </div>
            </div>
            <div className="box">
                <h3>CRIKET</h3>
                <div className="item">
                    <img src="../images/hero/hero3.jpg" alt="" />
                    <p>Google to boost Android Security In Few days </p>
                </div>
                <div className="item">
                    <img src="../images/hero/hero1.jpg" alt="" />
                    <p>Cespedes play wining Baseball Game </p>
                </div>
            </div>
            <div className="box">
                <h3>LABELS</h3>
                <ul><li><span>Boxing</span><label >(5)</label></li></ul>
                <ul><li><span>Faishan</span><label >(6)</label></li></ul>
                <ul><li><span>Health</span><label >(7)</label></li></ul>
                <ul><li><span>Nature</span><label >(9)</label></li></ul>
            </div>
        </div>
      </footer>
      <div className="legal">
        <div className="container flexSB">
           <p> All rights reserved</p>
           <p>Made with <i className='fa fa-heart'></i> by Angad</p>
        </div>
      </div>
    </>
  )
}

export default Footer
