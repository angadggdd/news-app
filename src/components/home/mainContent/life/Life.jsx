import React from 'react'
import "./life.css"
import Heading from '../../../common/Heading/Heading';

import { lifestyle } from '../../../../dummyData';
import Slider from 'react-slick';





function Life() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 4,
                },
            },
        ],
        };
        
  return (
    <>
      <section className='popularPost life'>
                <Heading title="Life Style" />
                <div className="content">
                    <Slider {...settings}>
                        {lifestyle.map((val) => {
                            return (
                                <div className="items">
                                    <div className="box shadow">
                                        <div className="images">
                                            <div className="img">
                                                <img src={val.cover} alt="" />
                                            </div>
                                            <div className="category category1">
                                                <span>{val.catgeory}</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h1 className="title">{val.title.slice(0, 40)}...</h1>
                                            <div className="date">
                                                <i className='fas fa-calendar-days'></i>
                                                <label htmlFor="">{val.date}</label>
                                            </div>
                                            <div className="comment">
                                                <i className='fas fa-comment'></i>
                                                <label htmlFor="">{val.date}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </Slider>
                </div>
            </section>
    </>
  )
}

export default Life
