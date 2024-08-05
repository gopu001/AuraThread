import React from 'react'
import './LoyaltyComp.scss'
import loyaltyImg from '../../assets/Cards/loyalty2.jpeg'

function LoyaltyComp() {
  return (
    <div className='loyaltyMainContainer'>
        <div className="loyaltyChildContainer">
            <div className="loyaltyImg">
                <img src={loyaltyImg} alt="" />
            </div>
            <div className="loyaltyContent">
                <p>At <span>nP-Sutra</span> we value every customer who walks through our virtual doors. Your trust and support inspire us to continually strive for excellence. To express our gratitude, we've created an exclusive Loyalty Program designed to reward our most dedicated customers with a range of premium benefits and unforgettable experiences.</p>

                <div className="loyaltyJoin">
                    <h2>Why Join Our Loyalty Program?</h2>
                    <div className="loyaltyPoints">
                    <p> Our Loyalty Program is more than just a way to save money—it's our way of saying thank you for being part of our family. Here are some of the incredible benefits you can enjoy as a member:</p>
                    <p> &#9679; Enjoy members-only discounts on our latest collections, allowing you to refresh your wardrobe with premium pieces at unbeatable prices.</p>
                    <p> &#9679; Be the first to shop our newest arrivals before they hit the shelves. Our loyalty members receive early access to our latest collections, ensuring you stay ahead of the fashion curve.</p>
                    </div>
                    
                    {/* <div className="loyaltyPoints">
                       <h3>Exclusive Discounts</h3>
                       <p>Enjoy members-only discounts on our latest collections, allowing you to refresh your wardrobe with premium pieces at unbeatable prices.</p>
                    </div>
                    <div className="loyaltyPoints">
                       <h3>Early Access to New Collections</h3>
                       <p>Be the first to shop our newest arrivals before they hit the shelves. Our loyalty members receive early access to our latest collections, ensuring you stay ahead of the fashion curve.</p>
                    </div> */}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LoyaltyComp
