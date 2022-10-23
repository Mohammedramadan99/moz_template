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
      content: ['product details page','add to cart']
    },
    {
      icon: <LightbulbCircleIcon />,
      title: 'marketing',
      content: ['SEO', 'Marketing Automation','Lead Generation']
    },
    {
      icon: <StarIcon />,
      title: 'mern stack',
      content: ['node js', 'express','mongodb' ,'react','sass','styled component']
    },
  ]
  return (
    <div className='features'>
      <div className="container">
        <div className="features__header">
          Our included service.
        </div>
        <div className="features__items">
          {featuresData.map((feat,i) => (
            <div key={i} className="features__items__item">
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