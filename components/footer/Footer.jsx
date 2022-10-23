import React from 'react'
import Logo from '../logo/Logo'

function Footer() {
  return (
    <div className='footer bg-dark'>
      <div className="footer__top">
        <div className="footer__top__partOne">
          <div className="footer__top__partOne__logo">
            <Logo color="light"/>
          </div>
        </div>
        <div className="footer__top__partTwo">
          <div className="footer__top__partTwo__title color_dark">links</div>
          <ul className='footer__top__partTwo__list'>
            <li>home</li>
            <li>pricing</li>
            <li>portfolio</li>
            <li>about us</li>
            <li>features</li>
          </ul>
        </div>
        <div className="footer__top__partThree">
          <div className="footer__top__partThree__title color_dark">legal</div>
          <ul className='footer__top__partThree__list'>
            <li>terms</li>
            <li>privacy policy </li>
            <li>cookies</li>
          </ul>
        </div>
        <div className="footer__top__partFour">
          <div className="footer__top__partFour__title color_dark">
            newsletter
          </div>
          <div className="footer__top__partFour__txt">
            Join over 2,563 people getting our emails
          </div>
          <form className="footer__top__partFour__form">
            <input type="text" />
            <input type="submit" value='sign up' />
          </form>
          <div className="footer__top__partFour__note">We only send interesting and relevant emails.</div>
        </div>
      </div>
      <div className="footer__bottom">
        fake website not real 2022 moz template
      </div>
    </div>
  )
}

export default Footer