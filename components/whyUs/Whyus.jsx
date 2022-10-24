import Image from 'next/image'
import imgOne from  '../../public/imgs/travel/team_4.jpg'

function Whyus() {
  return (
    <div className='whyus'>
      <div className="whyus__right">
        <div className="whyus__right__header" data-aos="zoom-out">
          why choose <span className='main-color'> us </span> ?
        </div>
        <div className="whyus__right__txt" data-aos="zoom-in">
          we will help you to achive your goals and having good time togeather 
        </div>
        <ul className="whyus__right__list" data-aos="fade-left">
          <li> professional website with attractive colors </li>
          <li> clean code </li>
          <li> attractive colors </li>
        </ul>
      </div>
      <div className="whyus__left">
        <div className="whyus__left__img">
          <Image src={imgOne} layout="fill" objectFit='cover' alt='img' />
        </div>
      </div>
    </div>
  )
}

export default Whyus