import Image from 'next/image'
import React from 'react'
import Indicators, { indicators } from './Indicators'

const CaroselCard = ({src}) => {
  return (
<div className="home-carousel-container">
        <Image
              src={src}
              alt="Photo 1"
              className="absolute right-16 top-16"
              width={300}
              height={300} 
              priority
            />
          <h1 className= "absolute left-24 top-38 text-2xl font-bold text-white ">Up to 10% off Voucher</h1>
          <Indicators indicators={indicators}/>
        </div>  )
}

export default CaroselCard