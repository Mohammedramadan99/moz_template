import Link from 'next/link'
import Logo from '../logo/Logo'
function Navbar()
{
  const links = ["home","about","contact"]
  return (
    <nav className='nav'>
      <div className="nav__logo">
        <Logo/>
      </div>
      <div className='nav__links'>
        {
          links.map((link,i) =>
            <div className='nav__links__link' key={i}>
              <div className='link_wrap'>
                {link} 
              </div>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar