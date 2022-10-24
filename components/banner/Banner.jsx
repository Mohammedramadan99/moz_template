import mainImg from '../../public/imgs/travel/img_1.jpg'
import Image from 'next/image'

function Banner() {
  return (
    <div className='banner'>
      <div className="banner__wrapper">
        <div className="banner__wrapper__img">
          <div className="banner__wrapper__img__overlay"></div>
          <div className="img--container">
            <Image src={mainImg} layout='fill' objectFit='cover' alt='main_img' data-aos="fade-up" data-aos-anchor-placement="top-center" />
          </div>
        </div>
        <div className="banner__wrapper__inner">
          <div className="banner__wrapper__inner__content">
            <div className="banner__wrapper__inner__content__title" data-aos="fade-left">
              main title big huge
            </div>
            <div className="banner__wrapper__inner__content__text" data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptas nobis
            </div>
            <div className="banner__wrapper__inner__content__btn main__btn">
              start now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner