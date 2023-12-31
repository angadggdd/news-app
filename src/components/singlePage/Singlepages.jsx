import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

import "./singlepages.css"
import SinglePageSlider from './SinglePageSlider/SinglePageSlider'
import { hero } from '../../dummyData'
import Side from '../home/sideContent/side/Side'


const Singlepages = () => {
    const { id } = useParams(null)
    const [item, setItem] = useState(null)

    useEffect(() => {
        const item = hero.find((item) => item.id === parseInt(id))
        window.scrollTo(0, 0)
        if (item) {
            setItem(item)
        }
    }, [id])
    return (
        <>
            {item ? (
                <main>
                    <SinglePageSlider />
                    <div className="container">
                        <section className='mainContent details'>
                            <h1 className='title'>{item.title}</h1>
                            <div className="author">
                                <span>by</span>
                                <img src={item.authorImg} alt="" />
                                <p>{item.authorName}</p>
                                <label htmlFor="">{item.time}</label>
                            </div>

                            <div className='social'>
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

                            </div>
                            <div className="desctop">
                                {item.desc.map((val) => {
                                    return (
                                        <>
                                            <p>{val.para1}</p>
                                            <p>{val.para2}</p>

                                        </>
                                    )
                                })}
                            </div>
                            <img src={item.cover} alt="" />
                            <div className="descbot">
                                {item.details.map((data) => {
                                    return (
                                        <>
                                            <h1>{data.title}</h1>
                                            <p>{data.para1}</p>

                                        </>
                                    )
                                })}

                            </div>



                            <div className="quote">
                                <i className='fa fa-quote-left'></i>
                                {item.details.map((data) => {
                                    return (
                                        <>
                                            <h1>{data.quote}</h1>

                                        </>
                                    )
                                })}

                            </div>
                            <div className="desctop">
                                {item.details.map((data) => {
                                    return (
                                        <>
                                            <p>{data.para2}</p>
                                            <p>{data.para3}</p>

                                        </>
                                    )
                                })}

                            </div>
                        </section>
                        <section className='sideontent'>
                            <Side/>
                        </section>
                    </div>
                </main >
            ) : (<h1> not found</h1>)}
        </>
    )


}

export default Singlepages
