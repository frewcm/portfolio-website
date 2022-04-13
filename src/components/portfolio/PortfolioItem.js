import React from 'react'



function PortfolioItem({image,title}) {
  return (
    <div className='card'>
      <div className='imagecontainer'>
        {<img src={image} alt='' />}
      </div>
     <p className='portfoliop'>{title}</p>
    </div>
  )
}

export default PortfolioItem