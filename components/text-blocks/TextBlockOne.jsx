import React from 'react'
import imgOne from '../../public/imgs/travel/img_3.jpg'
import Image from 'next/image'
function TextBlockOne() {
  return (
    <div className='textblock__one bg-dark'>
      {/* <div className="container"> */}
      <div className="textblock__one__img" data-aos="fade-right">
        <div className="img--container">
          <Image src={imgOne} layout='fill' objectFit='cover' alt="img" />
        </div>
      </div>
      <div className="textblock__one__content" data-aos="fade-left">
        <div className="textblock__one__content__smallTxt main-color">
          over 150K+ client 
        </div>
        <div className="textblock__one__content__longTxt">
          We created over <span className='main-color'> 27,000+ </span> stunning & quality products over last 5 year with satisfaction.
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default TextBlockOne