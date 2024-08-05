import React from 'react'
import './Scrolling.scss'
import Marquee from 'react-fast-marquee'

function Scrolling() {
  return (
    <div className='scrolling'>
        <Marquee speed={22}>
            <div className="pTags">
            <p>EXTRA 20% OFF ON OUR FIRST 50 ORDERS.</p>
        
        <p>Ready to Excite with Our Exclusive Embroidery Designs!</p>
        <p>FLAT 10% OFF ON YOUR FIRST ORDER.</p>
        </div>
        </Marquee>
    </div>
  )
}

export default Scrolling
