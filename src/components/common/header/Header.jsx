import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from "react-router-dom"


const Header = () => {

    const[navbar,setnavbnar] = useState(false)

  return (


    <>
      <Head/>
      <header>
        <div className="container paddingSmall">
            <nav >
                <ul className= {navbar ? "navbar":"flex"} onClick={()=>
                    setnavbnar(false)
                }>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/culture">Culture</Link></li>
                    <li><Link to ="/politics">Politics</Link></li>
                    <li><Link to ="/memes">Memes</Link></li>
                    <li><Link to ="/sports">Sports</Link></li>
                    <li><Link to ="/boxed">Boxed</Link></li>
                    <li><Link to ="/review">Review</Link></li>
                    <li><Link to ="/technology">Technology</Link></li>
                </ul>
                <button className='barIcon' onClick={()=>setnavbnar(!navbar)}>
                   {navbar ? <i className='fa fa-times'></i>: <i className='fa fa-bars'></i>}
                </button>
            </nav> 
        </div>
      </header>
    </>
  )
}

export default Header
