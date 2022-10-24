import React from 'react'
import StarIcon from '@mui/icons-material/DeveloperBoard'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
function Features()
{
  const featuresData = [
    {
      icon: <StorefrontIcon />,
      title: 'e-commerce',
      content: ['product details page','add to cart'],
      aos:'fade-left'
    },
    {
      icon: <LightbulbCircleIcon />,
      title: 'marketing',
      content: ['SEO', 'Marketing Automation','Lead Generation'],
      aos:'fade-up'
    },
    {
      icon: <StarIcon />,
      title: 'mern stack',
      content: ['node js', 'express','mongodb' ,'react','sass','styled component'],
      aos:'fade-right'
    },
  ]
  return (
    <div className='features'>
      <div className="container">
        <div className="features__header" data-aos="fade-left">
          Our included service.
        </div>
        <div className="features__items">
          {featuresData.map((feat,i) => (
            <div key={i} className="features__items__item" data-aos={feat.aos}>
              <div className="features__items__item__icon">
                {feat.icon}
              </div>
              <div className="features__items__item__title">
                {feat.title}
              </div>
              <div className="features__items__item__content">
                {feat.content.map((item,i) => <div key={i}> {item} </div> ) }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features