import { Virtual } from 'swiper';
import { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code'
import portfolioImg from '../../public/imgs/travel/img_8.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper'
// Import Swiper styles
import {Pagination,Navigation} from 'swiper'
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation';

import Image from 'next/image';

function Portfolio()
{
  const [portfolioData, setPortfolioData] = useState([
    {
      id: Math.floor(Math.random() * 1000 + 1),
      icon: <CodeIcon />,
      title: 'ecommerse',
      intro: 'a great ecommerce website who has many features like different products , product details , add to cart , login & register , payment and so on',
      img: portfolioImg,
    },
    {
      id: Math.floor(Math.random() * 1000 + 1),
      icon: <CodeIcon />,
      title: 'socialmedia',
      intro: 'a great ecommerce website who has many features like different products , product details , add to cart , login & register , payment and so on',
      img: portfolioImg,
    },
    {
      id: Math.floor(Math.random() * 1000 + 1),
      icon: <CodeIcon />,
      title: 'portfolio',
      intro: 'a great ecommerce website who has many features like different products , product details , add to cart , login & register , payment and so on',
      img: portfolioImg,
    },
    {
      id: Math.floor(Math.random() * 1000 + 1),
      icon: <CodeIcon />,
      title: 'game',
      intro: 'a great ecommerce website who has many features like different products , product details , add to cart , login & register , payment and so on',
      img: portfolioImg,
    },
  ])
  return (
    <div className='portfolio bg-dark'>
      <div className="container">
        <div className="portfolio__header">
          Lets check <span className='main-color'> my portfolio </span>
        </div>
        <div className="portfolio__workItems">
          <Swiper
            modules={[Virtual,Navigation, Pagination]}
            FreeMode={true}
            grapCursor={true}
            pagination={{ clickable: true }}
            virtual
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween:10
              },
              480: {
                slidesPerView: 2,
                spaceBetween:10
              },
              768: {
                slidesPerView: 3,
                spaceBetween:15
              },
              1024: {
                slidesPerView: 3,
                spaceBetween:25
              },
              1280: {
                slidesPerView: 4,
                spaceBetween:30
              },
            }}
          >
            {portfolioData.map((slideContent, index) => (
              <SwiperSlide  key={slideContent} virtualIndex={index}>
                  <div className="portfolio__workItems__item" >
                      <div className="portfolio__workItems__item__img">
                        <Image src={slideContent.img} layout='fill' objectFit='cover' alt='portfolioImg' />
                      </div>
                      <div className="portfolio__workItems__item__info info_hover">
                        <div className="portfolio__workItems__item__info__icon">
                          {slideContent.icon}
                        </div>
                        <div className="portfolio__workItems__item__info__title">
                          {slideContent.title}
                        </div>
                        <div className="portfolio__workItems__item__info__txt">
                          {slideContent.intro}
                        </div>
                      </div>
                  </div>
                  </SwiperSlide>
                ))
            }
          </Swiper>
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio

